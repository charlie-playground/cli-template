import { Args, Command } from '@oclif/core';

import { getTemperature } from '../../utils/weather-api.js';

export default class GetWeather extends Command {
  static args = {
    city: Args.string({
      description: 'The city to get the weather for',
      required: true,
    }),
  };

  static description = 'Get the weather for a city';

  static examples = [
    `<%= config.bin %> <%= command.id %> New York
It's currently 65 degrees in New York!
`,
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(GetWeather);
    const temp = await getTemperature(args.city);
    this.log(`It's currently ${temp} degrees celsius in ${args.city}!`);
  }
}
