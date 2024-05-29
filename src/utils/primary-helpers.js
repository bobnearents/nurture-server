import {
  convertNameToTypeFromOtherType,
  getOptionsForProviderType
} from '../../db/model/helpers.js';

/**
 * This takes a all db rows from a merged provider with all the options separated.
 * The first param will be an array of provider objects that all have the same name/id.
 *
 * @param {ProviderObjectWithDbNames[]} joinedProviderWithDuplicates
 * @param {ProviderType} providerType
 *
 * @returns {ProviderObject} new provider object with all option arrays merged and named.
 */
export const mergeNameAndAttachOptionArrays = (
  joinedProviderWithDuplicates,
  providerType
) => {
  const optionNames = getOptionsForProviderType(providerType);
  const options = joinedProviderWithDuplicates.reduce((acc, tuple) => {
    optionNames.forEach((optionName) => {
      const option = tuple[optionName];
      const optionId = tuple[`${optionName}_id`];
      const title = convertNameToTypeFromOtherType(
        optionName,
        'dbName',
        'jsName'
      );

      if (option && !acc[title]?.some((item) => item.name === option)) {
        acc[title] = [...(acc[title] || []), { name: option, id: optionId }];
      }
    });

    return acc;
  }, {});

  const newProviderNoOptions = optionNames.reduce((acc, optionName) => {
    const { [optionName]: _, [`${optionName}_id`]: __, ...rest } = acc;
    return rest;
  }, joinedProviderWithDuplicates[0]);

  return {
    ...newProviderNoOptions,
    ...options
  };
};

export const formatPhoneNumber = (phoneNumberString) => {
  // const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  // const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  // if (match) {
  //   return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  // }
  return phoneNumberString
  return undefined;
};

export const groupBy = function (data, key) {
  // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  return data.reduce(function (storage, item) {
    // get the first instance of the key by which we're grouping
    const group = item[key];

    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];

    // add this item to its group within `storage`
    storage[group].push(item);

    // return the updated storage to the reduce function, which will then loop through the next
    return storage;
  }, {}); // {} is the initial value of the storage
};
