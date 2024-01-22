// TODO
/*
wrap the CRUD functions in a service object and export 3 different types or a export 
a function that returns a type based on a param.

3 types are individual, organization, and demographic
individual and organization each have {type}/:id/upload

individual options: ['services', 'payment_options', 'certifications', 'appointment_types']
organization options: ['payment_options', 'appoint_types']
demographic profile: ['ethnicity', 'gender']
*/
// import {
//   ProviderTypes,
//   Option,
//   ProviderOptionNames,
//   JoinedObject,
//   OptionTableNames,
//   JoinedIndividualProviderObject,
//   IndividualProviderObject
// } from '../types.js';
import {
  convertNameToTypeFromOtherType,
  getOptionsForProviderType
} from '../../db/model/helpers.js';
import {
  formatPhoneNumber,
  groupBy,
  mergeNameAndAttachOptionArrays
} from '../utils/primary-helpers.js';
import {
  generateOptionsQueryString,
  handleQuery,
  leftJoinOptionTable
} from '../utils/query-functions.js';
import crudService from './crud-service.js';

const getAllProviderRowsFromDb = async (
  unreviewedProviders = false,
  providerType,
  id
) => {
  const optionTables = getOptionsForProviderType(providerType);
  const optionsQueryString = generateOptionsQueryString(optionTables);
  const leftJoins = optionTables
    .map((table) => leftJoinOptionTable(providerType, table))
    .join(' ');

  const { rows } = await handleQuery(
    `SELECT ${providerType}.*, ${optionsQueryString}
  FROM ${providerType} 
    ${leftJoins}
    ${
      id
        ? `WHERE ${providerType}.id =${id}`
        : providerType !== 'demographic_profile'
        ? `WHERE ${providerType}.needs_review = ${unreviewedProviders}`
        : ''
    }`
  );
  return rows;
};

const buildProviderData = (provider, providerType) => {
  const newProvider = mergeNameAndAttachOptionArrays(provider, providerType);

  newProvider.phone = formatPhoneNumber(newProvider.phone);

  return newProvider;
};

/**
 * This function takes all the joined providers from the db and groups all the duplicate entries by name. We do it this way in order to handle
 * multiple many-to-many relationships cleanly. after all the duplicate entries are grouped by name, we then build the 'options arrays', these
 * are the list of services offered, payment type accepted, and certifications held. These are in an array of objects; each object containing the
 * name and the id of the 'option'.
 *
 *
 * @returns {Object} newProvider object.
 * @example
 * {
 *  contact: {
 *    name: 'jane doe',
 *    overview: 'cool stuff'
 *  },
 *  services: [{name: 'Doula Support', id: 1}, {name: 'Perinatal Mental Health', id: 3}],
 *  certifications: [],
 *  paymentOptions: [{name: 'FAMIS', id: 5}]
 * }
 */
export const getAllProviders = async (isPendingProviders, providerType) => {
  const databaseProvidersWithDuplicates = await getAllProviderRowsFromDb(
    isPendingProviders,
    providerType
  );

  //group all duplicate providers by name
  const providersNoOptions = groupBy(databaseProvidersWithDuplicates, 'name');

  const providers = [];
  //go through each name and collect the options into lists
  Object.keys(providersNoOptions).forEach((provider) => {
    providers.push(
      buildProviderData(providersNoOptions[provider], providerType)
    );
  });
  return providers;
};

export const getProviderById = async (id, providerType) => {
  const databaseProvider = await getAllProviderRowsFromDb(
    false,
    providerType,
    id
  );

  return buildProviderData(databaseProvider, providerType);
};

/**
 * This functions inserts a new provider to the database, and then stores the new id returned from the database.
 * Then it takes the provider_id, and inserts entries to provider_service, provider_certification, and provider_payment, based on the list of
 * service_ids, certification_ids, and payment_ids respectively
 *
 * @example
 * {
 *  contact: {
 *    name: 'jane doe',
 *    overview: 'cool stuff'
 *  },
 *  services: [1, 3],
 *  certifications: [14],
 *  paymentOptions: [3, 7, 9]
 * }
 *
 */
export const createNewProvider = async (provider, providerType) => {
  const { general, ...optionList } = provider;

  const response = await crudService[providerType].add(general);
  if (response.error) return { error: response.error.detail };
  const { id } = response.rows[0];

  Object.keys(optionList).forEach((optionName) => {
    const dbName = convertNameToTypeFromOtherType(
      optionName,
      'jsName',
      'dbName'
    );
    console.log('provider', provider, 'optionName', optionName);
    provider[optionName].forEach((optionId) => {
      crudService[`${providerType}_${dbName}`].add({
        [`${providerType}_id`]: id,
        [`${dbName}_id`]: optionId,
        [`${providerType}_description`]: optionId.description
      });
    });
  });

  return id;
};

export const editProvider = async (provider, id, providerType) => {
  const { general, ...providerOptions } = provider;
  await crudService[providerType].update(id, general);

  Object.keys(providerOptions).forEach(async (optionType) => {
    const dbOptionName = convertNameToTypeFromOtherType(
      optionType,
      'jsName',
      'dbName'
    );
    const bridgeTable = `${providerType}_${dbOptionName}`;

    crudService[bridgeTable].delete(id, `${providerType}_id`);

    provider[optionType] &&
      provider[optionType].forEach((option) => {
        crudService[bridgeTable].add({
          [`${providerType}_id`]: id,
          [`${dbOptionName}_id`]: option,
          [`${providerType}_description`]: option.description
        });
      });
  });
};
