<template>
    <div class="flex justify-center">
      <div class="relative">
        <!-- Dynamic cart count -->
        <div v-if="cartCount > 0" class="t-0 absolute left-3">
          <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {{ cartCount }}
          </p>
        </div>
  
        <!-- Cart icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="file: mt-3 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218
               c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 
               20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 
               0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const cartCount = ref(0)
  
  onMounted(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cartCount.value = cart.reduce((total, item) => total + item.quantity, 0)
    // console.log(cart)
  })
  </script>
  
  <style scoped></style>
  