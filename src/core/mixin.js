import riot from 'riot';
import router from './router';

export default {
  /**
   * riotのmixinを設定します。
   * @return {Promise}
   */
  init: () => {
    return Promise.resolve().then(() => {
      riot.mixin({
        // riotx.riotxChange(store, evtName, func)のショートカット。
        listen: function(...args) {
          const store = this.riotx.get();
          this.riotxChange(store, ...args);
        },
        // pugファイルとjsファイルを分離して実装を進めることが出来ます。
        external: function(script) {
          const tag = this;
          script.apply(tag);
        },
        getRouter: () => {
          return router.getInstance();
        }
      });
    });
  }
};
