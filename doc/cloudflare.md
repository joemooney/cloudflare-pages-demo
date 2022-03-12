# CloudFlare Pages Demo

With a free cloudflare account you can specify a github repo and have that content served automatically optionally basically any web framework for free.

For persistent data storage you can then use cloudflare workers and other free offerings.

Demo SvelteKit project: [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Running

View the application: `npm run dev -- --open`



## Prerequisites

### cloudflare account

### npm install

You need `npm` installed which I did by first installing `nvm`

### gh install

I use the github command line tool `gh`

### install svelte adapter

After cloning this repo you first need to run
`npm install @sveltejs/adapter-static@next --save-dev`

## Creating a new project like this

Steps for how this repo was created:

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in new-project-name
npm init svelte@next new-project-name
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
