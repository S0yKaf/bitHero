<template>
  <div id="app">
    <bit-header></bit-header>
    <router-view></router-view>
  </div>
</template>

<script>

import BitHeader from './BitHeader.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to bitHero!'
    }
  },
  components: {
    BitHeader
  }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';
</style>
