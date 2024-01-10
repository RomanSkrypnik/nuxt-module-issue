import {defineNuxtModule, addPlugin, createResolver, addComponent, addComponentsDir} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve('./runtime');

    await addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      global: true,
    });

    nuxt.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolve(runtimeDir, 'public'),
        maxAge: 60 * 60 * 24 * 365, // 1 year
      })
    });
  }
})
