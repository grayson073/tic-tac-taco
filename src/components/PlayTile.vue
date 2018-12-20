<template>
  <div @click="handlePlay" class="play-tile">
    <h1>{{value}}</h1>
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
    game: Object,
    startGame: Function,
    onPlay: Function,
    position: String
  },
  methods: {
    handlePlay() {
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
