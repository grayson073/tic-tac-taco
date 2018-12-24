<template>
    <div class="game-board">
        <div class="game-grid">
          <PlayTile class="game-tile" v-for="(tile, index) in tiles"
          :key="index"
          :position="tiles[index]"
          :onPlay="handlePlay"
          :currentPlayer="currentPlayer"
          :reset="reset"/>
        </div>
    </div>
</template>

<script>
import PlayTile from './PlayTile';
export default {
  props: {
    tiles: Array,
    onPlay: Function,
    currentPlayer: Number,
    reset: Boolean
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
    background-color: rgb(255, 134, 179);
    border-radius: 12px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .game-grid {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 80vw;
    width: 80vw;
  }

  .game-tile {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 750px) {
    .game-board {
      height: 400px;
      width: 400px;
    }

    .game-grid {
      height: 400px;
      width: 400px;
    }

    .game-tile {
      height: 100%;
      width: 100%;
    }
  }
</style>
