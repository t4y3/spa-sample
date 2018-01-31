import { stores } from '../constants';

/**
 * ストア定義
 */
let pageStore = {
  state: {
    [stores.state.PAGE]: {
      // ページ名
      name: '',
      // ページタイトル
      title: '',
      // ルーティング情報。
      // @see: https://github.com/cam-inc/esr#route
      route: {
        params: {},
        queries: {},
        hash: ''
      }
    }
  },
  actions: {
    [stores.actions.PAGE_UPDATE]: (context, name) => {
      return Promise.resolve().then(() => {
        context.commit('pageName', { name });
      });
    }
  },
  mutations: {
    pageName: (context, obj) => {
      context.state[stores.state.PAGE].name = obj.name.name;
      return [stores.state.PAGE];
    }
  },
  getters: {
    [stores.getters.PAGE_NAME]: (context) => {
      return context.state[stores.state.PAGE].name;
    }
  }
};

export default pageStore;
