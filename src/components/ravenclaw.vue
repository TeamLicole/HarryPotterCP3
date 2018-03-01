<template>
  <div class="ravenclaw">
    <h1>Welcome to the RAVENCLAW house!!</h1>
    </br><p>"Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind." --The Sorting Hat</p>
    </br><p>Famous Ravenclaw Witch: Luna Lovegood (also known as Looney Lovegood)</p></br></br>
    <img src="/static/images/famous_r.jpg">
  </div>
</template>

<script>
 export default {
   name: 'ravenclaw',
   data () {
     return {
     }
   }
 }
</script>

<style>
  body {
    background: url('/static/images/raven_background.jpg');
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
