<template>
  <div class="slytherin">
    <h1>Welcome to the SLYTHERIN house!!</h1>
    </br><p>"Or perhaps in Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends." --The Sorting Hat</p>
    </br><p>Famous Slytherin Witch: Lord Voldemort (also known as the Dark Lord's most loyal servant)</p></br></br>
    <img src="/static/images/famous_s.png">
  </div>
</template>

<script>
 export default {
   name: 'slytherin',
   data () {
     return {
     }
   }
 }
</script>

<style>
  body {
    background: url('/static/images/slyth_background.jpg');
    background-size: cover;
  }

  h1 {
    text-align: center;
    color: white;
  }

  p {
    text-align: center;
    color: white;
  }

  img {
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: 5px solid black;
  }
</style>
