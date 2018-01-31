import riot from 'riot';
import 'riot-animore';
import mixin from './core/mixin';
import './core/polyfill';
import router from './core/router';
import store from './store';

// コンポーネント
import './components/pages/spa-root/spa-root.tag';
import './components/pages/spa-top/spa-top.tag';
import './components/pages/spa-shop/spa-shop.tag';
import './components/pages/spa-ranking/spa-ranking.tag';
import './components/organisms/spa-menu/spa-menu.tag';

document.addEventListener('DOMContentLoaded', () => {
  let _store;
  Promise.resolve()
    .then(() => mixin.init())
    .then(() => store.init())
    .then((store) => {
      _store = store;
      riot.mount('*');
    })
    .then(() => {
      router.init(_store);
    });
});
