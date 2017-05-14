<template>
  <div>
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <h1 class="title is-2">bitHero</h1>
        </router-link>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">

        <div class="nav-item">
          <div class="field is-grouped">
            <p class="control">
              <a href="api/auth/twitch"class="button is-primary">
                <span class="icon">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>Login with Twitch</span>
              </a>
            </p>
          </div>
        </div>

      </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'bit-header',
  data () {
    return {
      apiUrl: 'http://a.bithero.xyz'
    }
  }
}
</script>

<style lang="scss">
@import "~styles/global.scss";

.title {
  color: $purple;
}

</style>
