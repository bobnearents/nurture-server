import { buildQuery, handleQuery } from '../utils/query-functions.js';

/** Class representing crud functions of a given table */
class CrudFunctions {
  /**
   * @param {string} table - the name of the table from the database
   */
  constructor(private table: string) {}
  /**
   * get all items from the table
   *
   * @returns {Object} all rows from table
   */
  async getAll() {
    const result = await handleQuery(`SELECT * FROM ${this.table}`);
    if ('rows' in result) return result.rows;
  }

  /**
   * gets a single item from the table
   *
   * @param {number} id - the unique id of the item we're looking up
   * @returns {Object} the item from the table
   */
  async getOne(id: number) {
    try {
      const result = await handleQuery(
        `SELECT * FROM ${this.table} WHERE ID=${id}`
      );
      if ('rows' in result) return result.rows;
      return result.error;
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
  async add(item: {}) {
    const res = await handleQuery(
      buildQuery(`INSERT INTO ${this.table}`, Object.keys(item)),
      Object.values(item)
    );

    return res;
  }

  async update(id: number, patchBody: {}) {
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

  async delete(value: string, clause = 'ID') {
    try {
      const result = await handleQuery(
        `DELETE FROM ${this.table} WHERE ${clause}=${value}`
      );
      if ('rows' in result) return result.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

const generateTableFunctions = (tableArray: string[]) => {
  const tableFunctions = {};

  tableArray.forEach((table) => {
    tableFunctions[table] = new CrudFunctions(table);
  });
  return tableFunctions;
};

const tableFunctions = generateTableFunctions([
  'service',
  'payment',
  'certification',
  'provider',
  'organization',
  'provider_certification',
  'provider_payment',
  'provider_service',
  'organization_payment',
  'organization_service',
  'ethnicity',
  'setting',
  'provider_demographic',
  'provider_ethnicity',
  'provider_setting',
  'provider_patient_demographic'
]);

export default tableFunctions;
