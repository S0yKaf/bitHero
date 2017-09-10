<template>
  <div>
    <nav class="header navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1 id="brand" class="is-size-3">bitHero.xyz</h1>
        </router-link>
      </div>
      <!-- This "navbar-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="navbar-menu">

        <div class="navbar-start">
          <router-link to="/dashboard" v-if="$store.state.user.display_name" class="navbar-item">
            <span class="icon">
              <i class="fa fa-tachometer" aria-hidden="true"></i>
            </span>
            <span class="is-size-4">&nbspDashboard</span>
          </router-link>
        </div>

        <div class="navbar-end">

          <div v-if="$store.state.user.display_name === undefined" class="navbar-item">
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
            <a class="navbar-link is-active is-user" href="#">
              <img class="avatar" v-bind:src="$store.state.user.logo">
              <p>&nbsp{{$store.state.user.display_name}}</p>
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
  }),
  created() {
    axios.get('/api/user')
    .then(res => {
      this.$store.state.user = res.data.session;
    });
  }
}
</script>

<style lang="scss">
@import "~styles/global.scss";

#brand {
  color: $primary;
  font-family: "VT323", monospace;
  font-weight: 600;
}

.is-user {
  font-weight: 600;
  color: $primary !important;
}

.navbar {
  padding-right: 1vh;
  padding-left: 1vh;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9000;
}

.avatar {
  min-height: 32px;
  width: 32px;
  border-radius: 10%;
}

</style>
