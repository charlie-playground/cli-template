import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { stdout } from 'stdout-stderr';

import GetWeather from '../../src/commands/weather/index.js';
import { mockServer } from '../mock-server.js';

describe('Weather commands', () => {
  beforeEach(() => stdout.start());
  afterEach(() => {
    mockServer.resetHandlers();
    stdout.stop();
  });

  test('gets the temperature for a city', async () => {
    await GetWeather.run(['brooklyn']);
    expect(stdout.output).toContain(
      `It's currently 15 degrees celsius in brooklyn!`
    );
  });
});
