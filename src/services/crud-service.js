// import {
//   BridgeTableObject,
//   DemographicObject,
//   IndividualProviderObject,
//   JoinedIndividualProviderObject,
//   JoinedObject,
//   JoinedOrganizationObject,
//   Option,
//   OptionObject,
//   OrganizationObject
// } from '../types.js';
import { buildQuery, handleQuery } from '../utils/query-functions.js';
import { getAllTableNames } from '../../db/model/helpers.js';
// type Test = Option | JoinedObject | DemographicObject | BridgeTableObject<any>;
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
    const { rows } = await handleQuery(
      `SELECT * FROM ${this.table} WHERE ID=${id}`
    );
    return rows[0];
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
      const value = body[1] !== (undefined || null) ? `'${body[1]}'` : null;
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
    const { rows } = await handleQuery(
      `DELETE FROM ${this.table} WHERE ${clause}=${value}`
    );
    return rows;
  }
}

// type TableTypes = {
//   provider: JoinedIndividualProviderObject;
//   organization: JoinedOrganizationObject;
//   demographic: DemographicObject;
//   service: OptionObject;
//   payment: OptionObject;
//   certification: OptionObject;
//   ethnicity: OptionObject;
//   gender: OptionObject;
//   provider_certification: BridgeTableObject<'provider_certification'>;
//   provider_payment: BridgeTableObject<'provider_payment'>;
//   provider_service: BridgeTableObject<'provider_service'>;

//   demographic_ethnicity: BridgeTableObject<'demographic_ethnicity'>;
//   demographic_gender: BridgeTableObject<'demographic_gender'>;

//   organization_payment: BridgeTableObject<'organization_payment'>;
//   organization_service: BridgeTableObject<'organization_service'>;

//   organization_provider: BridgeTableObject<'organization_provider'>;
// };

// type TableNames = keyof TableTypes;

const generateTableFunctions = () => {
  const tableArray = getAllTableNames();

  const tableFunctions = {};
  tableArray.forEach((table) => {
    tableFunctions[table] = new CrudFunctions(table);
  });
  return tableFunctions;
};

const crudService = generateTableFunctions();

export default crudService;
