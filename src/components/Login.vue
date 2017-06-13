<template>
  <div class="login">
    <form>
      <div class="row">
        <div class="medium-6 columns">
            <label class="label" for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="userData.email" name="email" type="text" placeholder="Email">
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="medium-6 columns">
          <label class="label" for="email">Password</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="userData.password" name="password" type="password" placeholder="Password">
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
            </p>
        </div>
      </div>
      <button type="submit" v-on:click.prevent="validateBeforeSubmit" class="btn btn-primary">Invia</button>
    </form>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
      data: function () {
        return {
          userData: Object.assign({}, this.$store.state.users.user)
        }
      },
      methods: {
        ...mapActions([
          'login',
        ]),
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
            this.login(this.userData);
            alert('From Submitted!');
          }).catch(() => {
            alert('Correct them errors!');
          });
        }
      }
  }
</script>