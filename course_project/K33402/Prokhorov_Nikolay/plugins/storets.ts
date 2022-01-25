import { Plugin } from '@nuxt/types';
import { StoreTypescript } from "~/store";

declare module 'vue/types/vue' {
  interface Vue {
    $storets: StoreTypescript
  }
}

const appGlobalStore: Plugin = ({ store, $config }, inject) => {
  const storeTs = new StoreTypescript(store, $config)
  inject('storets', storeTs);
};

export default appGlobalStore;
