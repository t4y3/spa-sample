// TODO: reset.cssは要検討
import 'sanitize.css';
import './spa-root.css';
import { stores } from '../../../constants';

export default function() {
  const store = this.riotx.get();

  var a = '123';
  var v = '123';
  var f = `123`;
  var aaa = 1111111;

  // this.on('before-mount', () => {
  //   debugger;
  //   this.page = store.getter(stores.getters.PAGE_NAME);
  //   this.update();
  // });

  this.listen(stores.state.PAGE, (state, store) => {
    this.page = store.getter(stores.getters.PAGE_NAME);
    this.update();
  });
}
