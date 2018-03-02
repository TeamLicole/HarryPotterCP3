<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
   export default {
       name: 'App',
       components: { AppHeader }
   }
</script>

<style>
  body {
    background: black;
  }

  h1 {
    color: white;
    text-align: center;
    font-size: 60px;
  }

  h2 {
    color: white;
    text-align: center;
  }

  p {
    color: white;
    text-align: center;
  }

  img {
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: solid black 5px;
  }
</style>
