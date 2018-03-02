<template>
  <div class="gryff">
    <h1>Welcome to the GRYFFINDOR house!!</h1>
    </br><p>"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve, and chivalry Set Gryffindors apart" --The Sorting Hat</p>
    </br><p>Famous Gryffindor Witch: Hermione Granger (also known as the brightest witch of her age)</p></br></br>
    <img src="/static/images/famous_g.jpg">
    </br>
  </div>
</template>

<script>
 export default {
   name: 'gryffindor',
   data () {
     return {
     }
   }
 }
</script>

<style>
  .gryff {
    padding: 20px;
    background: url('/static/images/gryff_background.jpg');
    background-size: cover;
  }
</style>
