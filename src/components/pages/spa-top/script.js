import './spa-top.css';

export default function() {
  this.shop = () => {
    this.getRouter().navigateTo('/shop');
  };

  this.ranking = () => {
    this.getRouter().navigateTo('/ranking');
  };
}
