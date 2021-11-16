---
sidebarDepth: 2
---
# App Config: Basics

::: tip
The config reference is incomplete since the config format may still receive further changes. For a complete reference of the current available options, refer to [config.ts](https://github.com/vuejs/vitepress/blob/master/src/node/config.ts#L15).
:::

## Motivation

We love VuePress v1, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable. Even HMR updates can take up to seconds to reflect in the browser!

Fundamentally, this is because VuePress v1 is a Webpack app under the hood. Even with just two pages, it's a full on Webpack project (including all the theme source files) being compiled. It gets even worse when the project has many pages – every page must first be fully compiled before the server can even display anything!

Incidentally, Vite solves these problems really well: nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR. Plus, there are a few additional design issues I have noted in VuePress v1 over time but never had the time to fix due to the amount of refactoring it would require.

Now, with Vite and Vue 3, it is time to rethink what a "Vue-powered static site generator" can really be.

## description

- Type: `string`
- Default: `A VitePress site`

Description for the site. This will render as a `<meta>` tag in the page HTML.

```js
module.exports = {
  description: 'A VitePress site'
}
```
