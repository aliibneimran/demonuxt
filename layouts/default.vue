<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <Header/>

        <main class="min-h-[500px]">
            <slot />
        </main>

        <footer class="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2023 My Nuxt App</p>
        </footer>
    </div>
</template>

<script>
    useHead({
        title: 'My Nuxt App',
        meta: [
            { name: 'description', content: 'A simple Nuxt.js application' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js', async: true, defer: true }
        ],

    })  
</script>

<style lang="scss" scoped>

</style>