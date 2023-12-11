import pg from 'pg';
import pool from '../../config/connection.js';
// import { JoinedObject, ProviderOptionNames, Option } from '../types.js';

// type HandleQuery = (
//   query: string,
//   params?: string[]
// ) => Promise<QueryResult<JoinedObject | Option>>;

/**
 * this is just a helper function to handle the connecting and releasing for each query.
 *
 * @param {string} query - a valid sql query
 * @param {*} params - any additional params, typically values for an insert
 * @returns
 */
export const handleQuery = async (query, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result;
  } catch (error) {
    console.log('error', error);
    throw new Error(
      error?.msg || error?.message || error?.name || 'something went wrong'
    );
  } finally {
    client.release();
  }
};

export const flatten = (arr) => {
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
export const buildQuery = (action, fields) => {
  const placeholderParams = (arr) => {
    return arr.map((item, index) => {
      return '$' + (index + 1); //params start at 1
    });
  };
  return `${action} (${flatten(fields)}) VALUES (${flatten(
    placeholderParams(fields)
  )}) RETURNING id`;
};

export const generateOptionsQueryString = (optionTables) => {
  return optionTables
    .map((table) => `${table}.name AS "${table}", ${table}_id`)
    .join(', ');
};

export const leftJoinOptionTable = (mainTable, optionTable) => {
  const bridgeTable = `${mainTable}_${optionTable}`;

  return `LEFT JOIN ${bridgeTable} ON ${mainTable}.id = ${bridgeTable}.${mainTable}_id LEFT JOIN ${optionTable} ON ${bridgeTable}.${optionTable}_id = ${optionTable}.id`;
};
