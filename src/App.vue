<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from './components/Game';
export default {
  components: {
    Game,
  }
};
</script>

<style>
  html { 
    margin-left: calc(100vw - 100%);
  }

  #app {
    border: 2px solid black;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  body {
    padding: 0px;
    margin: 0px;
  }
</style>
