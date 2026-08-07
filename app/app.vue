<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <div>
    <AppHeader />
    <NuxtLayout>
      <!-- <Navigation /> -->
        <!-- <img
          src="~/assets/img/nuxt.jfif"
          alt="Discover Nuxt"
        > -->
        <NuxtPage />
      </NuxtLayout>
      <AppFooter />
  </div>
  <!-- https://nuxt.com/docs/4.x/directory-structure/nuxt -->
</template>