let app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "Made out of cotton",
    image: "./red.jpg",
    URL: "https://google.com",
    inStock: true,
    inventory: 0,
    details: ["80%", "Ethically made", "Waterproof"],
    variants: [
      {
        id: 2343,
        color: "red",
      },
      {
        id: 5684,
        color: "green",
      },
    ],
    sizes: [
      {
        id: 23431,
        size: "S",
      },
      {
        id: 56841,
        size: "M",
      },
      {
        id: 841,
        size: "L",
      },
      {
        id: 41,
        size: "XL",
      },
    ],
    cart: 0,
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantColor) {
      this.image = `./${variantColor}.jpg`;
    },
  },
});
