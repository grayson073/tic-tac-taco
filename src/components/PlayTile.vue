<template>
  <div>
    <div v-if="!value" @click="handlePlay" class="play-tile game-tile">
      <h1>{{value}}</h1>
    </div>
    <div v-if="value" class="play-tile game-tile">
      <h1>{{value}}</h1>
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
    border: 2px solid green;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
