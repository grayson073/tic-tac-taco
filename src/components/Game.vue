<template>
  <div class="game">
    <h1>Tic-Tac-Taco</h1>
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
    },
    winner: null,
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
      let p1 = this.player1;
      let p2 = this.player2;
      if(p.topLeft + p.topMid + p.topRight === 3) this.winner = p1;      
      if(p.middleLeft + p.middleMid + p.middleRight === 3) this.winner = p1;      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === 3) this.winner = p1;      
      if(p.topLeft + p.middleMid + p.bottomRight === 3) this.winner = p1;      
      if(p.bottomLeft + p.middleMid + p.topRight === 3) this.winner = p1;
      if(p.topLeft + p.middleLeft + p.bottomLeft === 3) this.winner = p1;
      if(p.topMid + p.middleMid + p.bottomMid === 3) this.winner = p1;
      if(p.topRight + p.middleRight + p.bottomRight === 3) this.winner = p1;
      
      if(p.topLeft + p.topMid + p.topRight === -3) this.winner = p2;      
      if(p.middleLeft + p.middleMid + p.middleRight === -3) this.winner = p2;      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === -3) this.winner = p2;      
      if(p.topLeft + p.middleMid + p.bottomRight === -3) this.winner = p2;      
      if(p.bottomLeft + p.middleMid + p.topRight === -3) this.winner = p2;
      if(p.topLeft + p.middleLeft + p.bottomLeft === -3) this.winner = p2;
      if(p.topMid + p.middleMid + p.bottomMid === -3) this.winner = p2;
      if(p.topRight + p.middleRight + p.bottomRight === -3) this.winner = p2;
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
    margin: 0px;
    padding: 0px;
  }

  h1 {
    font-family: 'Lily Script One', cursive;
    text-shadow: 3px 2px rgb(255, 169, 201);
  }

  button {
    background-color: rgb(255, 255, 255);
  }

  @media only screen and (min-width: 650px) {
    h1 {
      font-size: 75px;
      margin: 30px;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 649px) {
    .game {
      margin-left: -10px;
    }
    h1 {
      font-size: 55px;
      margin: 20px;
    }
  }

  /* iPhone 6/7/8 & Plus */
  @media only screen and (min-width: 375px) and (max-width: 414px) {
    h1 {
      font-size: 40px;
      margin: 20px;
    }
  }

  @media only screen and (min-width: 301px) and (max-width: 374px) {
    h1 {
      font-size: 35px;
      margin: 15px;
    }
  }

  /* Micro! */
  @media only screen and (max-width: 300px) {
    .game {
      margin-left: 10px;
    }

    h1 {
      font-size: 20px;
      margin: 10px;
    }
  }
</style>
