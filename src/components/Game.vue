<template>
  <div class="game">
    Game Component
    <GameBoard/>
    <PlayerDisplay/>
  </div>
</template>

<script>
import GameBoard from './GameBoard';
import PlayerDisplay from './PlayerDisplay';
export default {
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
    width: 95vw;
  }
</style>
