<template>
    <div class="flex h-full flex-col justify-center p-2">
      <!-- Table -->
      <div class="mx-auto w-full rounded-sm border border-gray-200 bg-white shadow-lg">
        <header class="border-b border-gray-100 px-5 py-4">
          <div class="font-semibold text-gray-800">Manage Carts</div>
        </header>
  
        <div class="overflow-x-auto p-3">
          <table class="w-full table-auto">
            <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="text-left font-semibold">Product Name</div>
                </th>
                <th class="p-2">
                  <div class="text-left font-semibold">Quantity</div>
                </th>
                <th class="p-2">
                  <div class="text-left font-semibold">Total</div>
                </th>
                <th class="p-2">
                  <div class="text-center font-semibold">Action</div>
                </th>
              </tr>
            </thead>
  
            <tbody class="divide-y divide-gray-100 text-sm">
              <!-- Product Rows -->
              <tr v-for="(product, index) in products" :key="product.id">
                <td class="p-2">
                  <input 
                    type="checkbox" 
                    class="h-5 w-5" 
                    :value="product.id"
                    v-model="selectedProducts"
                    @change="updateTotal(product.price, product.quantity, $event.target.checked)"
                  />
                </td>
                <td class="p-2">
                  <div class="font-medium text-gray-800">{{ product.title }}</div>
                </td>
                <td class="p-2">
                  <div class="text-left">{{ product.quantity }}</div>
                </td>
                <td class="p-2">
                  <div class="text-left font-medium text-green-500">$ {{ (product.price * product.quantity).toFixed(2) }}</div>
                </td>
                <td class="p-2">
                  <div class="flex justify-center">
                    <button @click="removeProduct(index)">
                      <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Total Amount -->
        <div class="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
          <div>Total</div>
          <div class="text-blue-600">$ {{ total.toFixed(2) }}</div>
        </div>
  
        <div class="flex justify-end">
          <input type="hidden" class="border border-black bg-gray-50" :value="selectedProducts.join(',')" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const products = ref([]);
  const selectedProducts = ref([]);
  const total = ref(0);
  
  // Load cart from localStorage
  onMounted(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    products.value = storedCart;
    selectedProducts.value = storedCart.map(item => item.id);
    total.value = storedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });
  
  const updateTotal = (price, quantity, isChecked) => {
    const itemTotal = price * quantity;
    if (isChecked) {
      total.value += itemTotal;
    } else {
      total.value -= itemTotal;
    }
  };
  
  const removeProduct = (index) => {
    const productId = products.value[index].id;
    const product = products.value[index];
  
    const selectedIndex = selectedProducts.value.indexOf(productId);
    if (selectedIndex > -1) {
      selectedProducts.value.splice(selectedIndex, 1);
      total.value -= product.price * product.quantity;
    }
  
    products.value.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(products.value));
  };
  </script>
  