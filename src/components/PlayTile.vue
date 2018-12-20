<template>
  <div class="play-tile">
    <button @click="handleSelect">Tile!</button>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
    startGame: Function,
    onSelect: Function,
    name: String
  },
  methods: {
    handleSelect() {
      this.onSelect(this.name);
    }
  }
};
</script>

<style scoped>
  .play-tile {
    border: 2px solid green;
  }
</style>
