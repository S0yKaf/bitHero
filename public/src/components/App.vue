<template>
  <div id="app">
    <bit-header></bit-header>
    <router-view id="wrapper"></router-view>
    <bit-footer></bit-footer>
  </div>
</template>

<script>

import BitHeader from './BitHeader.vue';
import BitFooter from './BitFooter.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to bitHero!'
    }
  },
  components: {
    BitHeader,
    BitFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono|VT323');
@import "../node_modules/bulma/sass/utilities/initial-variables";

$purple: #7b49fc;

$primary: $purple; // purple ish
$family-primary: "VT323", monospace;


@import "../node_modules/bulma/bulma";

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#wrapper {
  flex: 1 0 auto;
}

</style>
