<template>
  <div class="player-display">
    
  </div>
</template>

<script>
export default {
 
};
</script>


<style scoped>
  .player-display {
    border: 2px solid rgb(255, 134, 179);
    border-radius: 5px;
    max-width: 100%;
    padding: 10px;
    margin: 10px 10px 10px 10px;
    background-color: rgb(255, 255, 255);
  }

  @media only screen and (min-width: 650px) {
    .player-display {
      width: 450px;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 649px) {
    .player-display {
      width: 335px;
    }
  }

  /* iPhone 6/7/8 & Plus */
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    .player-display {
      width: 295px;
    }
  }

  /* iPhone 5/SE */
  @media only screen and (min-width: 301px) and (max-width: 374px) {
    .player-display {
      width: 245px;
    }
  }

  /* Micro! */
  @media only screen and (max-width: 300px) {
    .player-display {
      width: 135px;
    }
  }

</style>
