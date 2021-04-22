<!-- navbar et footer seront automatiquement appelés sur chaque page: -->
<template>
  <div id="app">
    <!-- <header-bar v-if="this.$route.name != 'Home'" /> -->
    <header-bar v-if="this.$route.name !== 'Home'"/>
    <router-view/>
    <!-- <footer-bar /> -->
  </div>
</template>
