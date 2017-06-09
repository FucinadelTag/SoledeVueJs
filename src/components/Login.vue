<template>
  <div class="login">
    <form>
      <div class="row">
        <div class="medium-6 columns">
          <label>Username
            <input type="text" v-model="userData.username" placeholder="username">
          </label>
        </div>
        <div class="medium-6 columns">
          <label>Password
            <input type="password" v-model="userData.password" placeholder="password">
          </label>
        </div>
      </div>
      <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">Invia</button>
    </form>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
      props: ['user'],
      methods: {
        ...mapActions([
          'login'
        ]),
        onSubmit(userData) {
          this.login(this.userData);
        }
      },
      computed: {
        userData () {
          return this.getUSer
        },
        ...mapGetters({
          getUSer: 'getUser'
        })
  }
  }
</script>