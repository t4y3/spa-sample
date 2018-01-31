import { stores } from '../../../constants';

export default {
  /**
   * ページ遷移時の処理。
   * @param {riotx.Store} store
   * @param {Object} route
   * @return {Promise}
   */
  onEnter: (store, route) => {
    return store.action(stores.actions.PAGE_UPDATE, {
      name: 'top',
      title: 'トップページ',
      route
    });
  },

  onBefore: (store, nextRoute, replace) => {},

  /**
   * ページ遷移後の処理。
   * @param {riotx.Store} store
   * @param {Object} route
   * @return {Promise}
   */
  onAfter: (store, route) => {}
};
