<template>
    <div class="home">
      <h1>Draco Dormiens Nunquam Titillandus</h1>
      <img src="/static/images/sorting-hat.jpg">
      <p>
        <button v-on:click="sortIntoHouse">Get Sorted!</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'Home',
     data() {
        return {
        }
      },
      methods: {
        getRandom: function(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
          return randomNum;
        },
        sortIntoHouse: function() {
          let houseNum = this.getRandom(0, 3);
          switch(houseNum) {
            case 0:
              this.$router.push("hufflepuff");
              break;
            case 1:
              this.$router.push("slytherin");
              break;
            case 2:
              this.$router.push("ravenclaw");
              break;
            case 3:
              this.$router.push("gryffindor");
              break;
          }
        },
      },
    }
</script>
