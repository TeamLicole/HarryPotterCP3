<template>
  <div class="hufflepuff">
    <h1>Welcome to the HUFFLEPUFF house!!</h1>
    </br><p>"You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil" --The Sorting Hat</p>
    </br><p>Famous Hufflepuff Witch: Tonks (also known as Nymphadora)</p></br></br>
    <img src="/static/images/famous_h.jpg">
  </div>
</template>

<script>
 export default {
   name: 'hufflepuff',
   data () {
     return {
     }
   }
 }
</script>

<style>
  body {
    background: url('/static/images/huff_background.jpg');
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
