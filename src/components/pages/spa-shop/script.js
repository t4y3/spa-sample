import './spa-shop.css';
import { stores } from '../../../constants';

export default function() {
  this.data = { duration: 1000, translateX: [500, 0] };
  const store = this.riotx.get();

  this.on('before-mount', () => {
    // ここでAPI通信を行う
    let goods = store.getter(stores.getters.SHOP_GOODS);
    if (goods) {
      this.goods = goods;
    } else {
      store.action(stores.actions.SHOP_GET_GOODS);
    }
  });

  this.listen(stores.state.SHOP, (state, store) => {
    this.goods = store.getter(stores.getters.SHOP_GOODS);
    this.update();
  });

  this.ranking = () => {
    this.getRouter().navigateTo('/ranking');
  };
}
