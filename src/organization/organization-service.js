import crudService from '../crud-service.js';

export const getAllOrganizations = async (isPendingOrganizations) => {
  const databaseOrganizationsWithDuplicates =
    await crudService.getAllOrganizations(isPendingOrganizations);
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
  //group all duplicate organizations by name
  const organizationsNoOptions = groupBy(
    databaseOrganizationsWithDuplicates,
    'name'
  );
  const organizations = [];
  //go through each name and collect the options into lists
  Object.keys(organizationsNoOptions).forEach((organization) => {
    organizations.push(
      buildOrganizationData(organizationsNoOptions[organization])
    );
  });
  return organizations;
};

export const getOrganizationById = async (id) => {
  const databaseOrganization = await crudService.getOrganizationById(id);
  return buildOrganizationData(databaseOrganization);
};

export const createNewOrganization = async (organization) => {
  if (!organization.general.name) return { error: 'no name given' };
  const response = await crudService.organization.add(organization.general);
  if (response.error) return { error: response.error.detail };
  const { id } = response.rows[0];

  organization.services &&
    organization.services.forEach((service) => {
      crudService.organization_service.add({
        organization_id: id,
        service_id: service,
        organization_description: service.description
      });
    });
  organization.paymentOptions &&
    organization.paymentOptions.forEach((payment) => {
      crudService.organization_payment.add({
        organization_id: id,
        payment_id: payment,
        organization_description: payment.description
      });
    });
  return id;
};

export const editOrganization = async (organization, id) => {
  const test = await crudService.organization.update(id, organization.general);
  organization.services &&
    crudService.organization_service.delete(id, 'organization_id') &&
    organization.services.forEach((service) => {
      crudService.organization_service.add({
        organization_id: id,
        service_id: service,
        organization_description: service.description
      });
    });
  organization.paymentOptions &&
    crudService.organization_payment.delete(id, 'organization_id') &&
    organization.paymentOptions.forEach((payment) => {
      crudService.organization_payment.add({
        organization_id: id,
        payment_id: payment,
        organization_description: payment.description
      });
    });
};

const buildOrganizationData = (organization) => {
  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
  const addOption = (list, option, id) => {
    if (!list.some((item) => item.name === option) && option) {
      list.push({ name: option, id });
    }
  };
  const services = [];
  const paymentOptions = [];
  organization.forEach((tuple) => {
    addOption(services, tuple.service, tuple.service_id);
    addOption(paymentOptions, tuple.payment, tuple.payment_id);
  });
  //then merge into one organization
  const { service, payment, ...newOrganizationNoOptions } = organization[0];
  const newOrganization = {
    ...newOrganizationNoOptions,
    services,
    paymentOptions
  };
  newOrganization.phone = formatPhoneNumber(newOrganization.phone);
  //the id's are unnecessary and nonsensical, so we get rid of them before we send it off to the client
  const { service_id, payment_id, ...organizationFinalForm } = newOrganization;
  return organizationFinalForm;
};
