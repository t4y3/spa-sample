import './spa-ranking.css';

export default function() {
  this.data = { duration: 1000, translateX: [500, 0] };
  this.shop = () => {
    this.getRouter().navigateTo('/shop');
  };
}
