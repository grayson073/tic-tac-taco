<template>
  <div class="game-board">
    <div v-if="game.active">
    GameBoard Component
    </div>
    <button v-if="!game.active" @click="startGame">Start Game!</button> 
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
    startGame: Function
  },
};
</script>

<style scoped>
  .game-board {
    border: 2px solid red;
    padding: 10px;
    max-width: 100%;
    width: 90vw;
    margin: 10px;
  }
</style>
