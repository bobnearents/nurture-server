import crudService from '../crud-service.js';
import getProviders from '../sheets/sheets-service.js';

const serviceList = [
  'Doula Support',
  'Lactation Support',
  'Perinatal Mental Health'
];
const paymentList = [
  'Free or Pro Bono Service',
  'Private Insurance',
  'Medicaid',
  'FAMIS',
  'Fee for Service',
  'Sliding Scale'
];

const certList = [
  'International Board Certified Lactation Consultant (IBCLC)',
  'Certified Lactation Counselor (CLC)',
  'Certified Lactation Specialist (CLS)',
  'Certified Lactation Educator (CLE)',
  'Certified Breastfeeding Counselor (CBC)',
  'Lactation Education Counselor (LEC)',
  'La Leche League Leader (LLL)',
  'Community Health Worker (CHW)',
  'Certified Doula (CD)',
  'Licensed Professional Counselor (LPC)',
  'Licensed Clinical Social Worker (LCSW)',
  'Licensed Clinical Psychologist (LCP)',
  'Doctor of Psychology (Psy.D)',
  'Perinatal Mental Health Certification (PMH-C)',
  'Doctoral Degree (PhD)',
  'Medical Degree (MD)',
  'Nursing Degree (RN, BSN)',
  'Breastfeeding USA Counselor',
  'Peer Breastfeeding Counselor'
];

const createNewProvider = async (provider) => {
  const { id } = await crudService.provider.add(provider.contact);
  Object.entries(provider.services).forEach((entry, i) => {
    const serviceId = serviceList.indexOf(entry[0]) + 1;
    if (entry[1] && serviceId > 0) {
      crudService.provider_service.add({
        provider_id: id,
        service_id: serviceId,
        provider_description: provider.description
      });
      //   addProviderServices(id, provider.services, provider.serviceDescription);
    }
  });
  Object.entries(provider.paymentOptions).forEach((entry, i) => {
    const paymentId = paymentList.indexOf(entry[0]) + 1;
    if (entry[1] && paymentId > 0) {
      crudService.provider_payment.add({
        provider_id: id,
        payment_id: paymentId,
        provider_description: provider.description
      });
      //   addProviderServices(id, provider.services, provider.serviceDescription);
    }
  });
  Object.entries(provider.certifications).forEach((entry, i) => {
    const certId = certList.indexOf(entry[0]) + 1;
    if (entry[1] && certId > 0) {
      crudService.provider_certification.add({
        provider_id: id,
        certification_id: certId
      });
    }
  });
};

const createProvidersFromSheets = async () => {
  let count = 0;
  console.log('getting providers...');
  const providers = await getProviders();
  await providers.forEach((provider, index) => {
    if (!index) return;
    createNewProvider(provider);
    count++;
  });
  console.log(`creating ${count} providers...`);
};

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

const getAllProviders = async () => {
  const sheetsProviders = await crudService.getAllProviders();

  //group all duplicate providers by name
  const providers = groupBy(sheetsProviders, 'name');
  //go through each name and 'collect the options into lists'
  return Object.keys(providers).map((provider) => {
    const addOption = (list, option, id) => {
      if (!list.includes(option) && option) {
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
    return newProvider;
  });
};
getAllProviders();

export default { createNewProvider, getAllProviders };

export { createProvidersFromSheets };
