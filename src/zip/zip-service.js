import fetch from 'node-fetch';
import config from '../../config/config.js';

async function getZipsInRadius(origin, radius) {
  const key = config.ZIP_KEY;
  const rawResult = await fetch(
    `https://www.zipcodeapi.com/rest/${key}/radius.json/${origin}/${radius}/mile`
  );
  const result = await rawResult.json();
  return result;
}

export default {
  getZipsInRadius
};
