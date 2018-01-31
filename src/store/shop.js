import { stores } from '../constants';

/**
 * ストア定義
 */
let shopStore = {
  state: {
    [stores.state.SHOP]: {
      // グッズ
      goods: []
    }
  },
  actions: {
    [stores.actions.SHOP_GET_GOODS]: (context) => {
      return Promise.resolve().then(() => {
        // TODO: api周りを要検討
        fetch('http://localhost:3000/goods', {
          cache: 'no-cache',
          credentials: 'same-origin'
        }).then((response) => {
          response.json().then(function(json) {
            setTimeout(() => {
              context.commit('goods', json);
            }, 2000);
          });
        });
      });
    }
  },
  mutations: {
    goods: (context, data) => {
      context.state[stores.state.SHOP].goods = data;
      return [stores.state.SHOP];
    }
  },
  getters: {
    [stores.getters.SHOP_GOODS]: (context) => {
      if (context.state[stores.state.SHOP].goods.length) {
        return context.state[stores.state.SHOP].goods;
      } else {
        return null;
      }
    }
  }
};

export default shopStore;
