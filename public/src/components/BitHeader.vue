<template>
  <div>
    <nav class="header navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1 class="title is-2">bitHero</h1>
        </router-link>
      </div>
      <!-- This "navbar-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="navbar-menu">
        <div class="navbar-end">
          <div v-if="user.display_name === undefined" class="navbar-item">
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

          <div v-else class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="#">
              <img class="avatar" v-bind:src="user.logo">
              <p>&nbspHello!, {{user.display_name}}</p>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item " href="/api/logout">
                <span class="icon">
                  <i class="fa fa-sign-out"></i>
                </span>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'bit-header',
  data: () => ({
      apiUrl: 'http://a.bithero.xyz',
      user: {}
  }),
  created() {
    axios.get('/api/user')
      .then(res => {
        this.user = res.data.session;
      })
  }
}
</script>

<style lang="scss">
@import "~styles/global.scss";

h1 {
  color: $purple;
}

// .navbar { position: fixed !important; top: 0; left: 0; right: 0; }

.header {
  background-color: $dark !important;
}

.avatar {
  border-radius: 50%;
}

</style>
