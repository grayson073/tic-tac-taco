<template>
  <div class="game">
    <h1>Tic-Tac-Toe!</h1>
    <button v-if="!game.active" @click="startGame">Start Game!</button>
    <GameBoard
    v-if="game.active" 
    :tiles="tiles"
    :onPlay="handlePlay"
    :currentPlayer="currentPlayer"/>
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
      let p = this.game.plays;
      this.currentPlayer === 1 ? p[selected] = 1 : p[selected] = -1;
      this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
      this.checkGameStatus();
    },
    getRandomPlayer() {
      return Math.floor(Math.random() * Math.floor(2) + 1);
    },
    startGame() {
      this.game.active = true;
      this.currentPlayer = this.getRandomPlayer();
    },
    checkGameStatus() {
      let p = this.game.plays;
      if(p.topLeft + p.topMid + p.topRight === 3) console.log('P1 WINS!');      
      if(p.middleLeft + p.middleMid + p.middleRight === 3) console.log('P1 WINS!');      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === 3) console.log('P1 WINS!');      
      if(p.topLeft + p.middleMid + p.bottomRight === 3) console.log('P1 WINS!');      
      if(p.bottomLeft + p.middleMid + p.topRight === 3) console.log('P1 WINS!');
      if(p.topLeft + p.middleLeft + p.bottomLeft === 3) console.log('P1 WINS!');
      if(p.topMid + p.middleMid + p.bottomMid === 3) console.log('P1 WINS!');
      if(p.topRight + p.middleRight + p.bottomRight === 3) console.log('P1 WINS!');
      
      if(p.topLeft + p.topMid + p.topRight === -3) console.log('P2 WINS!');      
      if(p.middleLeft + p.middleMid + p.middleRight === -3) console.log('P2 WINS!');      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === -3) console.log('P2 WINS!');      
      if(p.topLeft + p.middleMid + p.bottomRight === -3) console.log('P2 WINS!');      
      if(p.bottomLeft + p.middleMid + p.topRight === -3) console.log('P2 WINS!');
      if(p.topLeft + p.middleLeft + p.bottomLeft === -3) console.log('P2 WINS!');
      if(p.topMid + p.middleMid + p.bottomMid === -3) console.log('P2 WINS!');
      if(p.topRight + p.middleRight + p.bottomRight === -3) console.log('P2 WINS!');
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
