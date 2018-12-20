<template>
  <div class="game">
    <h1>Tic-Tac-Toe!</h1>
    <GameBoard
    :game="game"
    :startGame="() => game.active = true"
    :onSelect="handleSelect"/>
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
        plays: [
          'topLeft',
          'topMid',
          'topRight',
          'middleLeft',
          'middleMid',
          'middleRight',
          'bottomLeft',
          'bottomMid',
          'bottomRight'
        ],
        active: false
      }
    };
  },
  components: {
    GameBoard,
    PlayerDisplay
  },
  methods: {
    handleSelect(selected) {
      console.log('SELECTED', selected);
    }
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
    width: 100vw;
  }
</style>
