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
@import "~styles/global.scss";
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: $dark;
}

#wrapper {
  flex: 1 0 auto;
  padding: 1vh;
}

.hero {
  border-radius: 3px;
}

.content {
  padding-top: 1vh;
}

</style>
