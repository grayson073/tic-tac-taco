<template>
  <div class="game">
    Game Component
    <GameBoard
    :game="game"
    :startGame="() => game.active = true"/>
    <PlayerDisplay/>
  </div>
</template>

<script>
import GameBoard from './GameBoard';
import PlayerDisplay from './PlayerDisplay';
export default {
  data() {
    return {
      game: {
        play: {
          topLeft: null,
          topMid: null,
          topRight: null,
          middleLeft: null,
          middleMid: null,
          middleRight: null,
          bottomLeft: null,
          bottomMid: null,
          bottomRight: null,
        },
        active: false
      }
    };
  },
  components: {
    GameBoard,
    PlayerDisplay
  }
};
</script>


<style scoped>
  .game {
    border: 2px solid blue;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 100%;
    width: 95vw;
  }
</style>
