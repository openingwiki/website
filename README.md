# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```shell
# create a new project in the current directory
bun init solid

# create a new project in my-app
bun init solid my-app
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```shell
bun dev
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `bun run build` will generate a Node app that you can run with `bun start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
