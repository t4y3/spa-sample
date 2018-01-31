spa-shop
  p(data-is="animore" mount="{ data }") ショップページだよ
  ul
    li(each="{ item, i in goods }")
      p id: { item.id }
      p id: { item.name }
      p id: { item.description }
  spa-menu

  script.
    import script from './script';
    script.apply(this);
