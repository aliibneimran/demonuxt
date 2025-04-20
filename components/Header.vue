<template>
    <div>
        <header>
            <nav class="flex justify-between items-center bg-gray-800 text-white px-4">
                <ul class="flex gap-4 items-center bg-gray-800 text-white p-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
                <ul class="flex gap-4 items-center bg-gray-800 text-white p-4">
                    <li class="bg-green-600 rounded-md px-2 py-1"><NuxtLink to="/login">Login</NuxtLink></li>
                    <li class="bg-green-600 rounded-md px-2 py-1"><NuxtLink to="/register">Register</NuxtLink></li>
                    <li><NuxtLink to="/cart"><CartIcon/></NuxtLink></li>
                    </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>