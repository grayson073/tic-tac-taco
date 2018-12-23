<template>
    <div class="game-board">
        <div class="game-grid">
          <PlayTile class="game-tile" v-for="(tile, index) in tiles"
          :key="index"
          :position="tiles[index]"
          :onPlay="handlePlay"
          :currentPlayer="currentPlayer"/>
        </div>
    </div>
</template>

<script>
import PlayTile from './PlayTile';
export default {
  props: {
    tiles: Array,
    onPlay: Function,
    currentPlayer: Number
  },
  components: {
    PlayTile,
  },
  methods: {
    handlePlay(selected) {
      this.onPlay(selected);
    }
  }
};
</script>

<style>
  .game-board {
    border-radius: 12px;
    background-color: rgb(255, 134, 179);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .game-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 80vw;
    height: 80vw;
    }

  .game-tile {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }



</style>
