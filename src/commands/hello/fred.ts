import { Args, Command } from '@oclif/core';

export default class HelloFromFred extends Command {
  static args = {
    person: Args.string({
      description: 'Person Fried should say hello to',
      required: true,
    }),
  };

  static description = 'Say hello from Fred';

  static examples = [
    `<%= config.bin %> <%= command.id %> sue
hello sue from Fred!
`,
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(HelloFromFred);

    this.log(`hello ${args.person} from Fred!`);
  }
}
