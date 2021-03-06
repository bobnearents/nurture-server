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
    console.log(error.detail);
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
}

const getAllProviders = async () => {
  const { rows } = await handleQuery(
    `SELECT provider.*, service.name AS "service", service_id, payment.name AS "payment", payment_id, certification.name AS "cert", certification_id
  FROM provider LEFT JOIN provider_service ON provider.id = provider_service.provider_id
        LEFT JOIN service ON provider_service.service_id = service.id
    LEFT JOIN provider_payment ON provider.id = provider_payment.provider_id
        LEFT JOIN payment ON provider_payment.payment_id = payment.id
    LEFT JOIN provider_certification ON provider.id = provider_certification.provider_id
        LEFT JOIN certification ON provider_certification.certification_id = certification.id
    ORDER BY provider.id`
  );
  return rows;
};

//write them all out like this, so we still get access to the jsdocs
const service = new CrudFunctions('service');
const payment = new CrudFunctions('payment');
const certification = new CrudFunctions('certification');
const provider = new CrudFunctions('provider');
const provider_certification = new CrudFunctions('provider_certification');
const provider_payment = new CrudFunctions('provider_payment');
const provider_service = new CrudFunctions('provider_service');

export default {
  service,
  payment,
  certification,
  provider,
  provider_certification,
  provider_payment,
  provider_service,
  getAllProviders
};
