<template>
    <div class="game-board">
        <div v-if="game.active" class="game-grid">
          <PlayTile class="game-tile" v-for="(play, index) in game.plays"
          :key="index"
          :name="game.plays[index]"
          :onSelect="handleSelect"/>
        </div>
      <button v-if="!game.active" @click="startGame">Start Game!</button> 
    </div>
</template>

<script>
import PlayTile from './PlayTile';
export default {
  props: {
    game: Object,
    startGame: Function,
    onSelect: Function,
  },
  components: {
    PlayTile,
  },
  methods: {
    handleSelect(selected) {
      this.onSelect(selected);
    }
  }
};
</script>

<style scoped>
  .game-board {
    border: 2px solid red;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .game-grid {
    display: grid;
    grid-template-columns: repeat(3, 200px [col-start]);
    grid-template-rows: repeat(3, 200px [row-start]);
    margin: 10px;
    align-items: center;
  }

  .game-tile {
    list-style: none;
    height: 150px;
    width: 150px;
    justify-self: center;
  }
</style>
