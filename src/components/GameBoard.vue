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
    padding: 4px;
    border-radius: 12px;
    background-color: rgb(65, 91, 123);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .game-grid {
    display: grid;
    grid-template-columns: repeat(3, 77px [col-start]);
    grid-template-rows: repeat(3, 77px [row-start]);
    align-items: center;
  }

  .game-tile {
    list-style: none;
    justify-self: center;
  }

</style>
