<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="block no-underline text-gray-900 hover:text-gray-700"
    :key="product.id"
  >
    <div class="relative bg-white rounded-xl shadow-md p-4">
      <!-- Serial -->
      <span
        class="absolute top-2 right-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded"
      >
        #{{ serial }}
      </span>

      <!-- Product Image -->
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-48 object-contain rounded-lg mb-4"
      />

      <!-- Product Title -->
      <h2 class="text-base font-semibold mb-2 line-clamp-2">
        {{ product.title }}
      </h2>

      <!-- Price Section -->
      <div class="flex items-center space-x-2 mb-2">
        <span class="text-xl font-bold text-gray-800"
          >${{ product.price }}</span
        >
      </div>

      <!-- Rating (Fake for demo) -->
      <div class="flex items-center mb-4">
        <div class="flex text-yellow-400">
          <span v-for="i in 5" :key="i" class="text-xl">★</span>
        </div>
        <span
          class="ml-2 text-sm bg-yellow-100 text-yellow-800 font-semibold px-2 py-0.5 rounded"
        >
          5.0
        </span>
      </div>

      <!-- Add to Cart Button -->
      <button
        class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .962.305 1.157.78L5.94 6H19.5a.75.75 0 01.732.949l-1.5 6A.75.75 0 0118 13.5H6.21l-.45 1.2a.75.75 0 00.693 1.05h11.547a.75.75 0 010 1.5H6.453a2.25 2.25 0 01-2.117-3.027L5.11 6.72 4.22 4.528A.75.75 0 003.5 4.5H2.25a.75.75 0 010-1.5z"
          ></path>
        </svg>
        Add to cart
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  product: Object,
  serial: Number,
});
</script>
