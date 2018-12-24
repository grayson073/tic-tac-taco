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
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  .pre-click {
    border-radius: 100px;
    background-color: #FFA9C9;
    height: 50%;
    width: 50%;
  }

  .fade-in {
    opacity: 0;
  }

  .icon {
    align-items: center;
    animation-fill-mode: forwards;
    animation-name: icon;
    animation-duration: .7s;
    animation-iteration-count: 1;
    border-radius: 5px;
    display: flex;
    height: 100%;
    justify-content: center;
    transition: opacity 1s ease-in-out;
    opacity: 1;
    width: 100%;
    -webkit-animation-name: icon; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: .7s; /* Safari 4.0 - 8.0 */
    -webkit-animation-fill-mode: forwards;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 2s;
    height: 80%;
    width: 80%;
    -webkit-animation-name: fadeIn;
    -webkit-animation-duration: 1s;
  }

  img {
    height: 100%;
    width: 100%;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes icon {
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

  @-webkit-keyframes icon {
    0%   {background-color: #FFF7B2;}
    25%  {background-color: #CAFF77;}
    50%  {background-color: #BBE8CA;}
    75%  {background-color: #83FFD3;}
    100% {background-color: #A9FFAF;
    transform: rotate(360deg);}
  }

</style>
