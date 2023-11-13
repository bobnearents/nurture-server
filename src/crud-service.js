import { query } from 'express';
import pool from '../config/connection.js';

/**
 * this is just a helper function to handle the connecting and releasing for each query.
 *
 * @param {string} query - a valid sql query
 * @param {*} params - any additional params, typically values for an insert
 * @returns
 */
const handleQuery = async (query, params) => {
  const client = await pool.connect();
  let result;
  try {
    result = await client.query(query, params);
  } catch (error) {
    console.log('error', error);
    result = { error };
  } finally {
    client.release();
    return result;
  }
};

const flatten = (arr) => {
  return arr.join(', ');
};

/**
 * this is just a helper function to make queries a little less ugly.
 * It takes an action, adds the flattened list of column names, and then
 * adds VALUES ($1, $2, ...$n)
 *
 *
 * @param {string} action - what action are we performing on the database (ex: 'INSERT INTO table')
 * @param {Array<String>} fields - these are the keys from an object
 * @returns a valid sql query
 */
const buildQuery = (action, fields) => {
  const placeholderParams = (arr) => {
    return arr.map((item, index) => {
      return '$' + (index + 1); //params start at 1
    });
  };
  return `${action} (${flatten(fields)}) VALUES (${flatten(
    placeholderParams(fields)
  )}) RETURNING id`;
};

/** Class representing crud functions of a given table */
class CrudFunctions {
  /**
   * @param {string} table - the name of the table from the database
   */
  constructor(table) {
    this.table = table;
  }
  /**
   * get all items from the table
   *
   * @returns {Object} all rows from table
   */
  async getAll() {
    const { rows } = await handleQuery(`SELECT * FROM ${this.table}`);
    return rows;
  }

  /**
   * gets a single item from the table
   *
   * @param {number} id - the unique id of the item we're looking up
   * @returns {Object} the item from the table
   */
  async getOne(id) {
    try {
      const { rows } = await handleQuery(
        `SELECT * FROM ${this.table} WHERE ID=${id}`
      );
      return rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  /**
   *
   * @param {object} item - an item to be added to the table. all keys should be valid in the database already
   * @returns confirmation that the item got added
   */
  async add(item) {
    const res = await handleQuery(
      buildQuery(`INSERT INTO ${this.table}`, Object.keys(item)),
      Object.values(item)
    );

    return res;
  }

  async update(id, patchBody) {
    const flattenedPatchBody = Object.entries(patchBody);

    let queryString = '';
    flattenedPatchBody.forEach((body, index) => {
      const value = body[1] !== undefined || null ? `'${body[1]}'` : null;
      queryString += `${body[0]} = ${value}`;
      if (index != flattenedPatchBody.length - 1) {
        queryString += ', ';
      }
    });

    const res = await handleQuery(
      `UPDATE ${this.table} SET ${queryString} WHERE id = ${id}`
    );
  }

  async delete(value, clause = 'ID') {
    try {
      const { rows } = await handleQuery(
        `DELETE FROM ${this.table} WHERE ${clause}=${value}`
      );
      return rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

const leftJoinOptionTable = (mainTable, optionTable) => {
  const bridgeTable = `${mainTable}_${optionTable}`;
  return `LEFT JOIN ${bridgeTable} ON ${mainTable}.id = ${bridgeTable}.${mainTable}_id LEFT JOIN ${optionTable} ON ${bridgeTable}.${optionTable}_id = ${optionTable}.id`;
};

const getAllProviders = async (unreviewedProviders = false, id) => {
  const { rows } = await handleQuery(
    `SELECT provider.*, service.name AS "service", service_id, payment.name AS "payment", payment_id, certification.name AS "cert", certification_id, appointment_type.name AS "appointment_type", appointment_type_id
  FROM provider 
    ${leftJoinOptionTable('provider', 'service')}
    ${leftJoinOptionTable('provider', 'payment')}
    ${leftJoinOptionTable('provider', 'certification')}
    ${leftJoinOptionTable('provider', 'appointment_type')}
    ${
      id
        ? `WHERE provider.id =${id}`
        : `WHERE provider.needs_review = ${unreviewedProviders}`
    }`
  );

  return rows;
};

const getAllOrganizations = async (unreviewedOrganizations = false, id) => {
  const { rows } = await handleQuery(
    `SELECT organization.*,service.name AS "service", service_id, payment.name AS "payment", payment_id, provider_id, appointment_type.name AS "appointment_type", appointment_type_id
    FROM organization
    ${leftJoinOptionTable('organization', 'service')}
    ${leftJoinOptionTable('organization', 'payment')}
    ${leftJoinOptionTable('organization', 'appointment_type')}
    LEFT JOIN organization_provider ON organization.id = organization_provider.organization_id
    ${
      id
        ? `WHERE organization.id =${id}`
        : `WHERE organization.needs_review = ${unreviewedOrganizations}`
    }`
  );
  return rows;
};

const getProviderColumns = async () => {
  const { rows } = await handleQuery(
    `SELECT * FROM information_schema.columns WHERE table_name = 'provider'`
  );

  const columnList = rows.map((row) => row.column_name);

  return columnList;
};

const getProviderById = async (id) => await getAllProviders(false, id);
const getOrganizationById = async (id) => await getAllOrganizations(false, id);

//write them all out like this, so we still get access to the jsdocs
const service = new CrudFunctions('service');
const payment = new CrudFunctions('payment');
const certification = new CrudFunctions('certification');
const provider = new CrudFunctions('provider');
const organization = new CrudFunctions('organization');
const provider_certification = new CrudFunctions('provider_certification');
const provider_payment = new CrudFunctions('provider_payment');
const provider_service = new CrudFunctions('provider_service');
const organization_payment = new CrudFunctions('organization_payment');
const organization_service = new CrudFunctions('organization_service');
const ethnicity = new CrudFunctions('ethnicity');
const setting = new CrudFunctions('setting');
const provider_demographic = new CrudFunctions('provider_demographic');
const provider_ethnicity = new CrudFunctions('provider_ethnicity');
const provider_setting = new CrudFunctions('provider_setting');
const provider_patient_demographic = new CrudFunctions(
  'provider_patient_demographic'
);

export default {
  service,
  payment,
  certification,
  provider,
  organization,
  provider_certification,
  provider_payment,
  provider_service,
  organization_payment,
  organization_service,
  ethnicity,
  setting,
  provider_demographic,
  provider_ethnicity,
  provider_setting,
  provider_patient_demographic,
  getAllProviders,
  getAllOrganizations,
  getProviderById,
  getOrganizationById,
  getProviderColumns
};
