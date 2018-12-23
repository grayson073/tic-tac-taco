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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .game-tile {
    list-style: none;
    justify-self: center;
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 650px) {
    .game-grid {
      grid-template-columns: repeat(3, 150px [col-start]);
      grid-template-rows: repeat(3, 150px [row-start]);
      margin: 42px -12px -10px 38px;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 649px) {
    .game-grid {
      grid-template-columns: repeat(3, 115px [col-start]);
      grid-template-rows: repeat(3, 115px [row-start]);
      margin: 15px 0px 0px 15px;
    }
  }

  /* iPhone 6/7/8 & Plus */
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    .game-grid {
      grid-template-columns: repeat(3, 100px [col-start]);
      grid-template-rows: repeat(3, 100px [row-start]);
      padding: 9px;
    }
  }

  /* iPhone 5/SE */
  @media only screen and (min-width: 301px) and (max-width: 374px) {
    .game-grid {
      grid-template-columns: repeat(3, 85px [col-start]);
      grid-template-rows: repeat(3, 85px [row-start]);
      padding: 10px;
      margin: -10px -3px 5px -1px;
    }
  }

  /* Micro! */
  @media only screen and (max-width: 300px) {
    .game-board {
      width: 160px;
      height: 160px;
    }
    .game-grid {
      grid-template-columns: repeat(3, 50px [col-start]);
      grid-template-rows: repeat(3, 50px [row-start]);
      padding: 10px;
      margin: -30px 0px 0px 0px;
    }
  }

</style>
