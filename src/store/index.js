import riotx from 'riotx';
import pageStore from './page';
import shopStore from './shop';

export default {
  /**
   * riotx初期設定。
   * @return {Promise}
   */
  init: () => {
    return Promise.resolve().then(() => {
      let baseStore = {
        state: {},
        actions: {},
        mutations: {},
        getters: {}
      };

      // TODO: マージ処理を変更する
      Object.assign(baseStore.state, pageStore.state);
      Object.assign(baseStore.actions, pageStore.actions);
      Object.assign(baseStore.mutations, pageStore.mutations);
      Object.assign(baseStore.getters, pageStore.getters);
      Object.assign(baseStore.state, shopStore.state);
      Object.assign(baseStore.actions, shopStore.actions);
      Object.assign(baseStore.mutations, shopStore.mutations);
      Object.assign(baseStore.getters, shopStore.getters);
      const store = new riotx.Store(baseStore);
      riotx.add(store);
      return store;
    });
  }
};
