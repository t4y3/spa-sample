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
      name: 'ranking',
      title: 'ランキングページ',
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
  onAfter: (store, route) => {
    // return store.action(actions.ACCOUNT_HOWTOPAGE_ACCESSED);
  }
};
