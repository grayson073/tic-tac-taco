<template>
  <div>
    <div v-if="!value" @click="handlePlay" class="play-tile game-tile">
    </div>

    <div v-if="value" class="play-tile game-tile">
      <div class="fadeIn">
        <div class="icon">
          <span v-if="value === 1">X</span>
          <span v-if="value === -1">O</span>
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
  },
  methods: {
    handlePlay() {
      if(this.currentPlayer === 1) this.value = 1;
      if(this.currentPlayer === 2) this.value = -1;
      this.onPlay(this.position);
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
    width: 100px;
    height: 100px;
    font-family: 'Baloo', cursive;
    font-size: 40px;
  }

  .fade-in {
    opacity: 0;
  }
  .icon {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
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
  }

  img {
    width: 100%;
    height: 100%;
  }


  @-webkit-keyframes icon {
    0%   {background-color: #FFF7B2;}
    25%  {background-color: #CAFF77;}
    50%  {background-color: #BBE8CA;}
    75%  {background-color: #FFA5AD;}
    100% {background-color: #C3D3FF;
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
