<template>
  <div class="p-4">
    <h1 class="text-center mb-6 text-2xl font-bold">Products</h1>

    <!-- Loader -->
    <div v-if="pending" class="text-center text-gray-500">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-2">Loading products...</p>
    </div>

    <!-- Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in paginatedProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>
    

    <!-- Pagination -->
    <div class="flex justify-center items-center gap-4 mt-8">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition-colors"
      >
        Previous
      </button>

      <span class="px-4 py-2 font-medium">Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";

useHead({ title: "Products Page" });

// Fetch all products
const { data: products, pending } = await useFetch(
  "https://fakestoreapi.com/products"
);

// Pagination logic
const itemsPerPage = 4;
const currentPage = ref(1);

const totalPages = computed(() => {
  return products.value ? Math.ceil(products.value.length / itemsPerPage) : 1;
});

const paginatedProducts = computed(() => {
  if (!products.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>