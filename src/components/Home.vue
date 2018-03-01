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
     name: 'Home',
     data() {
        return {
        }
      },
      computed: {
       houseList: function() {
         var houseList = new Array;
         houseList[0] = "Hufflepuff";
         houseList[1] = "Slytherin";
         houseList[2] = "Ravenclaw";
         houseList[3] = "Gryffindor";
         return month[this.current.month - 1];
       }
     },
      methods: {
        getRandom: function(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          var randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
          return randomNum;
        },
        sortIntoHouse: function() {
          var houseNum = this.getRandom(0, 3);
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
