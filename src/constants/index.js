export const stores = {
  state: {
    PAGE: 'page',
    SHOP: 'shop',
    RANKING: 'ranking'
  },
  actions: {
    PAGE_UPDATE: 'pageUpadate',
    SHOP_GET_GOODS: 'shopGetGoods'
  },
  getters: {
    PAGE_NAME: 'pageName',
    SHOP_GOODS: 'shopGoods'
  }
};
