/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

/* eslint-disable */
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@iconify/svelte';

declare module '$app/paths' {
  export const base: string;
  export const assets: string;
}

declare module 'cookieconsent/src/cookieconsent';
