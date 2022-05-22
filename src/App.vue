<template>
  <div id="app">
    <img id="logo" alt="Netflix logo" src="./assets/Netflix_2015_logo.svg">
    <BoolflixMain/>
  </div>
</template>

<script>
import BoolflixMain from './components/BoolflixMain.vue'

export default {
  name: 'App',
  components: {
    BoolflixMain
  }
}
</script>

<style lang="scss">
*{
  border: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //border: 5px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  #logo{
    padding-top: 20px;
    max-width: 20%;
    max-height: 100px
  };
}
</style>
