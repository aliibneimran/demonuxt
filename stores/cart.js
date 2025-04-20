// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    cartCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0)
  },
  actions: {
    addToCart(item) {
      this.items.push(item)
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart')
      this.items = savedCart ? JSON.parse(savedCart) : []
    }
  }
})
