import Esr from 'esr';
import topRoute from '../components/pages/spa-top/route';
import shopRoute from '../components/pages/spa-shop/route';
import rankingRoute from '../components/pages/spa-ranking/route';

let _routerInstance;

export default {
  /**
   * 初期設定。
   * @param {riotx.Store} store
   * @return {Promise}
   */
  init: (store) => {
    return Promise.resolve()
      .then(() => {
        const router = new Esr(Esr.BROWSER);
        router
          .onBeforeOnce(() =>
            Promise.all([
              // store.action(actions.ACCOUNT_CHECK_SIGNINED),
              // store.action(actions.APPLICATION_GET_CONFIG)
            ]).catch(/*(err) => store.action(actions.LOG_ERROR, err)*/)
          )
          .onBefore(() => {
            Promise.all([
              // bugsnag.refresh(),
              // store.action(actions.APPLICATION_NAVIGATION_START)
            ]).catch((err) => {} /*store.action(actions.LOG_ERROR, err)*/);
          })
          .on(
            '/',
            (route) => {
              topRoute.onEnter(store, route);
            },
            (route, replace) => {
              topRoute.onBefore(store, route, replace);
            },
            (route) => {
              topRoute.onAfter(store, route);
            }
          )
          .on(
            '/shop',
            (route) => {
              shopRoute.onEnter(store, route);
            },
            (route, replace) => {
              shopRoute.onBefore(store, route, replace);
            },
            (route) => {
              shopRoute.onAfter(store, route);
            }
          )
          .on(
            '/ranking',
            (route) => {
              rankingRoute.onEnter(store, route);
            },
            (route, replace) => {
              rankingRoute.onBefore(store, route, replace);
            },
            (route) => {
              rankingRoute.onAfter(store, route);
            }
          )
          // // 開発用ページ
          // .on(
          //   '/debug',
          //   (route) => DebugRoute.onEnter(store, route),
          //   (route, replace) => DebugRoute.onBefore(store, route, replace)
          // )
          .on(
            '*',
            () => {
              Promise.resolve();
            },
            (route, replace) => {
              // NotfoundRoute.onBefore(store, route, replace);
            }
          )
          .onAfter(() => {
            // store.action(actions.APPLICATION_NAVIGATION_END).catch(err => store.action(actions.LOG_ERROR, err))
          })
          .onAfterOnce(() => {
            // store.action(actions.APPLICATION_LAUNCH).catch(err => store.action(actions.LOG_ERROR, err))
          });
        return router;
      })
      .then((router) => {
        router.start();
        _routerInstance = router;
        return router;
      });
  },

  /**
   * インスタンスを返します。
   * @return {esr}
   */
  getInstance: () => {
    return _routerInstance;
  }
};
