import crudService from '../crud-service.js';

/**
 * This functions inserts a new provider to the database, and then stores the new id returned from the database.
 * Then it takes the provider_id, and inserts entries to provider_service, provider_certification, and provider_payment, based on the list of
 * service_ids, certification_ids, and payment_ids respectively
 *
 * @param {Object} provider
 * @param {Object} provider.contact a list of all personal information about the provider (name, business, email, website)
 * @param {String} provider.contact.name required
 * @param {String} provider.contact.business
 * @param {String} provider.contact.email
 * @param {String} provider.contact.website
 * @param {String} provider.contact.phone
 * @param {String} provider.contact.address_1
 * @param {String} provider.contact.address_2
 * @param {String} provider.contact.city
 * @param {String} provider.contact.state
 * @param {String} provider.contact.zip
 * @param {String} provider.contact.country
 * @param {String} provider.contact.overview
 * @param {Array<Number>} provider.services list of service id's
 * @param {Array<Number>} provider.certifications list of certification id's
 * @param {Array<Number>} provider.paymentOptions list of payment id's
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
const createNewProvider = async (provider) => {
  if (!provider.contact || !provider.contact.name)
    return { error: 'no name given' };
  const response = await crudService.provider.add(provider.contact);
  if (response.error) return { error: response.error.detail };
  const { id } = response.rows[0];
  console.log(id);
  provider.services.forEach((serviceId) => {
    crudService.provider_service.add({
      provider_id: id,
      service_id: serviceId,
      provider_description: provider.description
    });
  });
  provider.certifications.forEach((certId) => {
    crudService.provider_certification.add({
      provider_id: id,
      certification_id: certId,
      provider_description: provider.description
    });
  });
  provider.paymentOptions.forEach((paymentId) => {
    crudService.provider_payment.add({
      provider_id: id,
      payment_id: paymentId,
      provider_description: provider.description
    });
  });
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
const getAllProviders = async () => {
  const databaseProvidersWithDuplicates = await crudService.getAllProviders();
  const groupBy = function (data, key) {
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
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
  //group all duplicate providers by name
  const providers = groupBy(databaseProvidersWithDuplicates, 'name');

  //go through each name and 'collect the options into lists'
  return Object.keys(providers).map((provider) => {
    const addOption = (list, option, id) => {
      if (!list.some((item) => item.name === option) && option) {
        list.push({ name: option, id });
      }
    };
    const prov = providers[provider];
    const services = [];
    const certifications = [];
    const paymentOptions = [];
    prov.forEach((tuple) => {
      addOption(services, tuple.service, tuple.service_id);
      addOption(certifications, tuple.cert, tuple.certification_id);
      addOption(paymentOptions, tuple.payment, tuple.payment_id);
    });
    //then merge into one provider
    const { service, cert, payment, ...newProviderNoOptions } = prov[0];
    const newProvider = {
      ...newProviderNoOptions,
      services,
      certifications,
      paymentOptions
    };
    newProvider.phone = formatPhoneNumber(newProvider.phone);
    return newProvider;
  });
};

export default { createNewProvider, getAllProviders };
