<template>
  <div class="game">
    <h1 @click="game.active = false">Tic-Tac-Taco</h1>
    <p v-if="!game.active" @click="startGame" class="game-mode">PLAYER VS PLAYER</p>
    <section>
      <GameBoard
      v-if="game.active" 
      :tiles="tiles"
      :onPlay="handlePlay"
      :currentPlayer="currentPlayer"
      :reset="reset"/>
    </section>
    <section class="message">
      <p v-if="game.active">{{!game.winner && game.active ? currentTurnMessage : gameOverMessage }}</p>
      <p v-if="game.winner" @click="startGame" class="game-mode">NEW GAME</p>
      <img v-if="!game.active" src="@/assets/taco.png">
    </section>
  </div>
</template>

<script>
import GameBoard from './GameBoard';

function initGame() {
  return {
    active: false,
    plays: {
      topLeft: null, topMid: null, topRight: null,
      middleLeft: null, middleMid: null, middleRight: null,
      bottomLeft: null, bottomMid: null, bottomRight: null,
    },
    winner: null
  };
}

function initTiles() {
  return Object.keys(initGame().plays);
}
export default {

  data() {
    return {
      game: initGame(),
      currentPlayer: null,
      gameOverMessage: null,
      player1: 'Carne Asada',
      player2: 'Chorizo',
      reset: false,
      playCount: 0
    };
  },
  components: {
    GameBoard,
  },
  methods: {
    handlePlay(selected) {
      this.reset = false;
      this.playCount++;
      let p = this.game.plays;
      this.currentPlayer === 1 ? p[selected] = 1 : p[selected] = -1;
      this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
      this.checkGameStatus();
    },
    getRandomPlayer() {
      return Math.floor(Math.random() * Math.floor(2) + 1);
    },
    startGame() {
      this.reset = true;
      this.game = initGame();
      this.tiles = initTiles();
      this.game.active = true;
      this.currentPlayer = this.getRandomPlayer();
    },
    checkGameStatus() {
      let p = this.game.plays;
      let p1 = this.player1;
      let p2 = this.player2;

      // Player 1 winning conditions (8 possibilities)
      if(p.topLeft + p.topMid + p.topRight === 3) this.game.winner = p1;      
      if(p.middleLeft + p.middleMid + p.middleRight === 3) this.game.winner = p1;      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === 3) this.game.winner = p1;      
      if(p.topLeft + p.middleMid + p.bottomRight === 3) this.game.winner = p1;      
      if(p.bottomLeft + p.middleMid + p.topRight === 3) this.game.winner = p1;
      if(p.topLeft + p.middleLeft + p.bottomLeft === 3) this.game.winner = p1;
      if(p.topMid + p.middleMid + p.bottomMid === 3) this.game.winner = p1;
      if(p.topRight + p.middleRight + p.bottomRight === 3) this.game.winner = p1;
      
      // Player 2 winning conditions (8 possibilities)
      if(p.topLeft + p.topMid + p.topRight === -3) this.game.winner = p2;      
      if(p.middleLeft + p.middleMid + p.middleRight === -3) this.game.winner = p2;      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === -3) this.game.winner = p2;      
      if(p.topLeft + p.middleMid + p.bottomRight === -3) this.game.winner = p2;      
      if(p.bottomLeft + p.middleMid + p.topRight === -3) this.game.winner = p2;
      if(p.topLeft + p.middleLeft + p.bottomLeft === -3) this.game.winner = p2;
      if(p.topMid + p.middleMid + p.bottomMid === -3) this.game.winner = p2;
      if(p.topRight + p.middleRight + p.bottomRight === -3) this.game.winner = p2;
    
      if(this.game.winner !== null) {
        this.gameOverMessage = this.game.winner + ' wins!';
      }

      if(this.playCount === 9 && this.game.winner === null) {
        this.game.winner = 'draw';
        this.gameOverMessage = 'Stalemate!';
      }
    }
  },
  computed: {
    currentTurnMessage: function() {
      let p = this.currentPlayer;
      let msg = '\'s turn!';
      return p === 1 ? this.player1 + msg : this.player2 + msg;
    }
  }
};
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lily+Script+One');

  .game {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  /* Start Button CSS - Button by Federico Dossena https://fdossena.com/?p=html5cool/buttons/i.frag */
  .game-mode {
    cursor: pointer;
    display: inline-block;
    padding: 5px 25px 5px 25px;
    margin: 2vh 0px 6vh 0px;
    border: 3px solid black;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto',sans-serif;
    font-size: 5vw;
    font-weight: 800;
    color: rgb(0, 0, 0);
    text-align: center;
    transition: all 0.15s;
    background-color: rgba(255, 255, 255, 0.694);
    max-height: 500px;
    max-width: 500px;
  }
  .game-mode:hover{
    color:rgb(145, 145, 145);
    border-color:rgb(145, 145, 145);
  }
  .game-mode:active{
    color:rgb(255, 134, 179);
    border-color:rgb(255, 134, 179);
  }
  /* End Button CSS */


  h1 {
    font-family: 'Lily Script One', cursive;
    font-size: 15vw;
    text-shadow: 3px 2px rgb(255, 136, 180);
    width: 80vw;
    text-align: center;
    cursor: pointer;
  }

  .message {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-family:'Roboto',sans-serif;
    font-weight: 800;
    font-size: 5vw;
  }

  .message, img {
    max-height: 55vw;
    max-width: 55vw;
  }

</style>
