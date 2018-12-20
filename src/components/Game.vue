<template>
  <div class="game">
    <h1>Tic-Tac-Toe!</h1>
    <button v-if="!game.active" @click="startGame">Start Game!</button>
    <GameBoard
    v-if="game.active" 
    :tiles="tiles"
    :onPlay="handlePlay"/>
    <PlayerDisplay/>
  </div>
</template>

<script>
import GameBoard from './GameBoard';
import PlayerDisplay from './PlayerDisplay';

function initGame() {
  return {
    active: false,
    plays: {
      topLeft: null, topMid: null, topRight: null,
      middleLeft: null, middleMid: null, middleRight: null,
      bottomLeft: null, bottomMid: null, bottomRight: null,
    }
  };
}

function initTiles() {
  return Object.keys(initGame().plays);
}
export default {

  data() {
    return {
      game: initGame(),
      tiles: initTiles(),
      currentPlayer: null
    };
  },
  components: {
    GameBoard,
    PlayerDisplay
  },
  methods: {
    handlePlay(selected) {
      let play;
      if(this.currentPlayer === 1) play = 'X';
      if(this.currentPlayer === 2) play = 'O';

      console.log(selected);
    },
    getRandomPlayer() {
      return Math.floor(Math.random() * Math.floor(2) + 1);
    },
    startGame() {
      this.game.active = true;
      this.currentPlayer = this.getRandomPlayer();
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
