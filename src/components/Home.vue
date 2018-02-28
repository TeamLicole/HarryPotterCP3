<template>
    <div class="home">
      <h1>Draco Dormiens Nunquam Titillandus</h1>
      <p>
        <button v-on:click="sortIntoHouse">Get Sorted!</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/cloud.jpg'
	 }
     }
 }
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }
</style>
