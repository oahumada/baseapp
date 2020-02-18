<template>
  <div id="app">
    <transition>
    <app-landing></app-landing>    
    </transition>
  </div>
</template>

<script>
  import Landing from './components/content/landing.vue'
  export default {
    name: 'app',
    components: {
      'app-landing': Landing
    },
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>