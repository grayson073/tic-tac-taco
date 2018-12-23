<template>
  <div class="game">
    <h1>Tic-Tac-Taco</h1>
    <p v-if="!game.active" @click="startGame" class="game-mode">PLAYER VS PLAYER</p>
    <section>
      <GameBoard
      v-if="game.active" 
      :tiles="tiles"
      :onPlay="handlePlay"
      :currentPlayer="currentPlayer"/>
    </section>
    <section class="message">
      {{message}}
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
      currentPlayer: null,
      message: null
    };
  },
  components: {
    GameBoard,
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

      // Player 1 winning conditions (8 possibilities)
      if(p.topLeft + p.topMid + p.topRight === 3) this.winner = p1;      
      if(p.middleLeft + p.middleMid + p.middleRight === 3) this.winner = p1;      
      if(p.bottomLeft + p.bottomMid + p.bottomRight === 3) this.winner = p1;      
      if(p.topLeft + p.middleMid + p.bottomRight === 3) this.winner = p1;      
      if(p.bottomLeft + p.middleMid + p.topRight === 3) this.winner = p1;
      if(p.topLeft + p.middleLeft + p.bottomLeft === 3) this.winner = p1;
      if(p.topMid + p.middleMid + p.bottomMid === 3) this.winner = p1;
      if(p.topRight + p.middleRight + p.bottomRight === 3) this.winner = p1;
      
      // Player 2 winning conditions (8 possibilities)
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

  /* Start Button CSS - Button by Federico Dossena https://fdossena.com/?p=html5cool/buttons/i.frag */
  .game-mode {
    cursor: pointer;
    display: inline-block;
    padding: 5px 25px 5px 25px;
    border: 0.16em solid rgb(0, 0, 0);
    margin: 30px 0px 30px 0px;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto',sans-serif;
    font-weight: 800;
    color: rgb(0, 0, 0);
    text-align: center;
    transition: all 0.15s;
  }
  .game-mode:hover{
    color:rgb(170, 170, 170);
    border-color:rgb(170, 170, 170);
  }
  .game-mode:active{
    color:rgb(97, 97, 97);
    border-color:rgb(97, 97, 97);
  }
  /* End Button CSS */


  h1 {
    font-family: 'Lily Script One', cursive;
    text-shadow: 3px 2px rgb(255, 136, 180);
    padding: 50px 0px 0px 0px
  }

  .message {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 0px 0px;
    font-family:'Roboto',sans-serif;
    font-weight: 800;
  }

  .message img {
    max-height: 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: 650px) {
    .game-mode {
      margin: 75px 0px 75px 0px;
    }

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
      font-size: 55px;
      margin: 20px;
    }
  }

  @media only screen and (min-width: 301px) and (max-width: 374px) {
    .game-mode {
      margin: 45px 0px 45px 0px;
    }

    h1 {
      font-size: 45px;
      margin: 15px;
    }
  }

  /* Micro! */
  @media only screen and (max-width: 300px) {

    .game-mode {
      margin: 25px 0px 25px 0px;
      font-size: 12px;
      font-weight: 800;
    }

    h1 {
      font-size: 35px;
      margin: 10px;
    }
  }
</style>
