import { google } from 'googleapis';
import { sheets } from 'googleapis/build/src/apis/sheets/index.js';
import config from '../../config/config.js';
import crudService from '../crud-service.js';

/**
 * this component is deprecated
 *
 * we're keeping it around in case we need to refresh the database. using the spreadsheet as a temporary backup
 *
 */

const jwtClient = new google.auth.JWT(
  config.CLIENT_EMAIL,
  null,
  config.PRIVATE_KEY.replace(/\\n/g, '\n'), //sanitize the key since heroku escapes out the \n to \\n https://stackoverflow.com/questions/39492587/escaping-issue-with-firebase-privatekey-as-a-heroku-config-variable
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheetsService = google.sheets({ version: 'v4', auth: jwtClient });

const trimDataTable = (response) => {
  const headers = {
    main: response.data.values[1],
    fallback: response.data.values[0]
  };
  //"slice" off the headers from the providers array and then begin to loop through each provider
  const providersArray = response.data.values.slice(2);
  const providers = providersArray.map((provider) => {
    //since the database is just a spreadsheet, this is my attempt at keeping data organized,
    //eventually these sub objects will likely be names of relational data tables
    let newProvider = {
      contact: {},
      paymentOptions: {},
      services: {},
      certifications: {},
      formData: {},
      demographic: {
        ethnicity: {},
        patientDemographic: {},
        setting: {}
      }
    };
    headers.main.forEach((header, i) => {
      const headerName = header || headers.fallback[i];
      if (i < 2) newProvider.formData[headerName] = provider[i];
      else if (i < 6) newProvider.services[headerName] = provider[i];
      else if (i < 19) {
        if (provider[i]) newProvider.contact[headerName] = provider[i];
      } else if (i < 40) newProvider.certifications[headerName] = provider[i];
      // else if (i < 43) newProvider.contact[headerName] = !!provider[i];
      else if (i < 51) newProvider.paymentOptions[headerName] = provider[i];
      else if (i < 63)
        newProvider.demographic.ethnicity[headerName] = provider[i];
      else if (i < 65) newProvider.demographic[headerName] = provider[i];
      else if (i < 74)
        newProvider.demographic.setting[headerName] = provider[i];
      else if (i < 83)
        newProvider.demographic.patientDemographic[headerName] = provider[i];
    });
    return newProvider;
  });
  //only send a provider if it should be visible and has a name provided
  return providers.filter((provider) => {
    return provider !== undefined && provider.contact['name'];
  });
};

const getProviders = async () => {
  try {
    const sheetsResponse = await sheetsService.spreadsheets.values.get({
      spreadsheetId: config.SPREADSHEET_ID,
      range: config.SPREADSHEET_RANGE
    });
    const data = trimDataTable(sheetsResponse);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

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

const ethnicityList = [
  'Native American or Alaska Native',
  'East Asian or Asian American',
  'South Asian or Indian American',
  'Black or African American',
  'Hispanic, Latino, Latina, or Latinx',
  'Middle Eastern or Northern African',
  'Native Hawaiian or Pacific Islander',
  'White'
];

const patientDemographicList = [
  'Native American or Alaska Native',
  'Asian American or Pacific Islander',
  'Black or African-American',
  'Hispanic or Latinx',
  'LGBTQIA',
  'Low Income Families/Residents',
  'White'
];

const settingList = [
  'Hospital',
  'Birth Center',
  'Free-standing Clinic',
  'Private Practice',
  'Non-profit Agency',
  'Government Agency',
  'Client/Patient Home',
  'Virtual Practice'
];

const createNewProviderFromSheets = async (provider) => {
  const response = await crudService.provider.add(provider.contact);
  const { id } = response.rows[0];
  const { ethnicity, setting, patientDemographic, ...demographicProfile } =
    provider.demographic;
  const demographicResponse = await crudService.provider_demographic.add({
    ...demographicProfile,
    provider_id: id
  });
  const { demographicId = id } = demographicResponse.rows[0];
  Object.entries(ethnicity).forEach((entry, i) => {
    const ethnicityId = ethnicityList.indexOf(entry[0]) + 1;
    if (entry[1] && ethnicityId > 0) {
      crudService.provider_ethnicity.add({
        demographic_id: demographicId,
        ethnicity_id: ethnicityId
      });
    }
  });
  Object.entries(setting).forEach((entry, i) => {
    const settingId = settingList.indexOf(entry[0]) + 1;
    if (entry[1] && settingId > 0) {
      crudService.provider_setting.add({
        demographic_id: demographicId,
        setting_id: settingId
      });
    }
  });
  Object.entries(patientDemographic).forEach((entry, i) => {
    const patientDemographicId = patientDemographicList.indexOf(entry[0]) + 1;
    if (entry[1] && patientDemographicId > 0) {
      crudService.provider_patient_demographic.add({
        demographic_id: demographicId,
        patient_id: patientDemographicId
      });
    }
  });

  Object.entries(provider.services).forEach((entry, i) => {
    const serviceId = serviceList.indexOf(entry[0]) + 1;
    if (entry[1] && serviceId > 0) {
      crudService.provider_service.add({
        provider_id: id,
        service_id: serviceId,
        provider_description: provider.description
      });
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

const migrateProvidersFromSheets = async () => {
  let count = 0;
  console.log('getting providers...');
  const providers = await getProviders();
  await providers.forEach((provider, index) => {
    if (!index) return;
    createNewProviderFromSheets(provider);
    count++;
  });
  return `created ${count} providers...`;
};

export default migrateProvidersFromSheets;
