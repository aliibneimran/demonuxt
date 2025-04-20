<template>
  <div v-if="pending" class="text-center p-8">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
    <p class="mt-4 text-gray-600">Loading product details...</p>
  </div>

  <div v-else-if="error" class="text-center p-8 text-red-500">
    Error loading product: {{ error.message }}
  </div>

  <div v-else-if="product" class="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8">
    <!-- Product Images -->
    <div class="md:w-1/2">
      <!-- Main Image -->
      <div class="bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center h-96">
        <img 
          :src="product.image" 
          :alt="product.title" 
          class="object-contain h-full"
        >
      </div>
      
      <!-- Additional Images (simulated) -->
      <!-- <div class="grid grid-cols-4 gap-2">
        <button 
          v-for="(img, index) in additionalImages" 
          :key="index"
          @click="product.image = img"
          class="h-24 bg-gray-100 rounded overflow-hidden border-2 transition-all flex items-center justify-center"
          :class="{'border-blue-500': product.image === img, 'border-transparent': product.image !== img}"
        >
          <img :src="img" :alt="`Product view ${index + 1}`" class="object-contain h-full">
        </button>
      </div> -->
    </div>

    <!-- Product Details -->
    <div class="md:w-1/2">
      <!-- Category -->
      <span class="text-sm text-gray-500 uppercase tracking-wider">{{ product.category }}</span>
      
      <!-- Product Name -->
      <h1 class="text-3xl font-bold mb-2 mt-1">{{ product.title }}</h1>
      
      <!-- Rating -->
      <div class="flex items-center mb-4">
        <div class="flex items-center">
          <StarRating :rating="product.rating.rate" />
          <span class="text-gray-600 text-sm ml-1">
            {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </span>
        </div>
      </div>
      
      <!-- Price -->
      <div class="mb-6">
        <p class="text-2xl font-semibold">${{ product.price.toFixed(2) }}</p>
        <p class="text-green-600 font-medium mt-1">In Stock</p>
      </div>
      
      <div class="border-t border-gray-200 my-4"></div>
      
      <!-- Description -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-3">Description</h2>
        <p class="text-gray-700">{{ product.description }}</p>
      </div>
      
      <!-- Features -->
      <!-- <div class="mb-6">
        <h2 class="text-xl font-semibold mb-3">Features</h2>
        <ul class="list-disc pl-5 text-gray-700 space-y-1">
          <li>High-quality materials</li>
          <li>Durable construction</li>
          <li>Customer favorite</li>
          <li>Free returns within 30 days</li>
        </ul>
      </div> -->
      
      <!-- Color Selection (if applicable) -->
      <!-- <div v-if="product.category.includes('clothing')" class="mb-6">
        <h2 class="text-xl font-semibold mb-3">Select Color:</h2>
        <div class="flex gap-2">
          <button 
            v-for="color in colors" 
            :key="color.name"
            @click="selectedColor = color"
            class="w-10 h-10 rounded-full border-2 transition-all"
            :class="{
              'border-blue-500': selectedColor.name === color.name,
              'border-transparent': selectedColor.name !== color.name
            }"
            :style="{ backgroundColor: color.code }"
            :title="color.name"
          ></button>
        </div>
      </div> -->
      
      <!-- Quantity -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-3">Quantity:</h2>
        <div class="flex items-center gap-2">
          <button 
            @click="quantity > 1 ? quantity-- : null"
            class="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
          >
            -
          </button>
          <input 
            v-model.number="quantity" 
            type="number" 
            min="1" 
            max="10"
            class="w-16 h-10 border text-center rounded"
          >
          <button 
            @click="quantity < 10 ? quantity++ : null"
            class="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button 
          @click="addToCart"
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          Add to Cart - ${{ (product.price * quantity).toFixed(2) }}
        </button>
        <button class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors border border-gray-300">
          Add to Wishlist
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const route = useRoute();
const { data: product, pending, error } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
);

// Simulated additional images
const additionalImages = ref([
  product.value.image,
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
]);

// Product options
const colors = ref([
  { name: 'Black', code: '#000000' },
  { name: 'Dark Green', code: '#1a3f1a' },
  { name: 'Charcoal', code: '#36454F' }
]);

const selectedColor = ref(colors.value[0]);
const quantity = ref(1);

// Cart function
const addToCart = () => {
  const cartItem = {
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image,
    color: selectedColor.value.name,
    quantity: quantity.value
  };
  
  // In a real app, you would add to a cart store
  console.log('Added to cart:', cartItem);
  alert(`Added ${quantity.value} ${product.value.title} to cart!`);
};

// Star rating component
const StarRating = {
  props: ['rating'],
  setup(props) {
    const fullStars = Math.floor(props.rating);
    const hasHalfStar = props.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return { fullStars, hasHalfStar, emptyStars };
  },
  template: `
    <div class="flex">
      <span v-for="n in fullStars" :key="'full-' + n" class="text-yellow-400">★</span>
      <span v-if="hasHalfStar" class="text-yellow-400">½</span>
      <span v-for="n in emptyStars" :key="'empty-' + n" class="text-gray-300">★</span>
    </div>
  `
};
</script>

<style scoped>
/* Custom styles */
</style>