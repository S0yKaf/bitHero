<template>
  <footer class="footer bit-footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>bitHero</strong> by <a href="https://github.com/Kiniamaro">Kiniamaro</a>. The source code is licensed
          <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">GPL-2</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/Kiniamaro/bitHero">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'bit-footer',
  data () { return {}}
}
</script>

<style lang="scss">
@import "~styles/global.scss";

.bit-footer {
  background-color: darken($dark, 2);
}

</style>
