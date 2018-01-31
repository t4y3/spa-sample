import './spa-menu.css';

export default function() {
  this.top = () => {
    this.getRouter().navigateTo('/');
  };
  this.shop = () => {
    this.getRouter().navigateTo('/shop');
  };
  this.ranking = () => {
    this.getRouter().navigateTo('/ranking');
  };
}
