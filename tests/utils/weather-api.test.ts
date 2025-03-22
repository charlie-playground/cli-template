import { afterEach, describe, expect, test } from 'bun:test';

import { getTemperature } from '../../src/utils/weather-api.js';
import { mockServer } from '../mock-server.js';

describe('Weather API Client', () => {
  afterEach(() => mockServer.resetHandlers());

  test('gets the temperature for a city', async () => {
    const city = 'brooklyn';
    const tempC = 15;

    const temp = await getTemperature(city);

    expect(temp).toBe(tempC);
  });
});
