<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtPageTransition name="page" mode="out-in" />
    <NuxtLoadingIndicator />
    <!-- <NuxtProgress /> -->
    <NuxtErrorBoundary>
      <NuxtError />
    </NuxtErrorBoundary>
    <NuxtDevTools />
    <NuxtHead>
      <title>My Nuxt App</title>
      <meta
        name="description"
        content="This is a sample Nuxt.js application."
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
      />
    </NuxtHead>
  </div>
</template>

