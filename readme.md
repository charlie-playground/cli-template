# Bun + Oclif CLI Template

A simple CLI powered by [Bun](https://bun.sh/) and [Oclif](https://oclif.io/).

## Install

1. Run `bun create charlie-labs/cli-template <dir_name>` to create a new CLI project.
2. Navigate to the new directory: `cd <dir_name>`.
3. Run the install script to set the CLI tool name: `./install.sh <tool_name>`.
4. Register the project in the Bun global scope and install the CLI:
   ```sh
   bun link
   bun link cli-template
   ```
5. Run the CLI:
   - `cli-template weather brooklyn`
   - `cli-template help`

## Develop

Run `bun run dev --help` to get started in development mode. There's no need to build anything, this will always run the latest code from `src/`.

## Publish

Run `bun run release` to publish the package to npm.

## Testing

Note: `msw` must be pinned to version `2.3.1` or there is an issue with Bun support. [[source](https://github.com/oven-sh/bun/issues/13072)]
