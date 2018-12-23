<template>
  <div>
    <div v-if="!value" @click="handlePlay" class="play-tile pre-click"></div>
    <div v-if="value" class="play-tile">
      <div class="fadeIn">
        <div class="icon">
          <img v-if="value === 1" src="@/assets/x.png">
          <img v-if="value === -1" src="@/assets/o.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  props: {
    onPlay: Function,
    position: String,
    currentPlayer: Number,
    reset: Boolean
  },
  methods: {
    handlePlay() {
      if(this.currentPlayer === 1) this.value = 1;
      if(this.currentPlayer === 2) this.value = -1;
      this.onPlay(this.position);
    }
  },
  watch: {
    reset: function(newReset, oldReset) {
      if(newReset === true && oldReset === false) this.value = null;
    }
  }
};
</script>

<style scoped>

  .play-tile {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 40px;
  }

  .pre-click {
    width: 50%;
    height: 50%;
    border-radius: 100px;
    background-color: #FFA9C9;
  }

  .fade-in {
    opacity: 0;
  }

  .icon {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-animation-name: icon; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    -webkit-animation-fill-mode: forwards;
    animation-name: icon;
    animation-duration: 3s;
    animation-iteration-count: 1;
    -webkit-transition: opacity 3s ease-in-out;
    -moz-transition: opacity 3s ease-in-out;
    -ms-transition: opacity 3s ease-in-out;
    -o-transition: opacity 3s ease-in-out;
    opacity: 1;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    animation-duration: 3s;
    height: 80%;
    width: 80%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @-webkit-keyframes icon {
    0%   {background-color: #FFF7B2;}
    25%  {background-color: #CAFF77;}
    50%  {background-color: #BBE8CA;}
    75%  {background-color: #83FFD3;}
    100% {background-color: #A9FFAF;
    transform: rotate(360deg);}
  }

  @-webkit-keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }



</style>
