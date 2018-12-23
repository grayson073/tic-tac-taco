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
    font-size: 40px;
  }

  .pre-click {
    border-radius: 50px;
    transform: scale(0.5);
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
    width: 85px;
    height: 85px;
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
    width: 80%;
    height: 80%;
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

  @media only screen and (min-width: 650px) {
    .icon {
      width: 135px;
      height: 135px;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 649px) {
    .icon {
      width: 100px;
      height: 100px;
    }
  }

  @media only screen and (min-width: 375px) and (max-width: 414px) {
    .icon {
      width: 85px;
      height: 85px;
    }
  }

    /* iPhone 6/7/8 & Plus */
  @media only screen and (max-width: 374px) {
    .icon {
      width: 70px;
      height: 70px;
    }
  }

    /* Micro! */
  @media only screen and (max-width: 300px) {
    .icon {
      width: 40px;
      height: 40px;
    }
  }

</style>
