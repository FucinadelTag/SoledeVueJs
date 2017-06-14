<template>

  <div>
    <cart :cartData="cartData"></cart>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cart from './Cart';

export default {
    computed: {
        ...mapGetters([
          'cartData'
        ]),
    },
    components: {
        Cart
    },
    methods:{
        ...mapActions([
          'initCart'
        ]),
    },
    beforeMount: function(){
        this.initCart()
    }
}
</script>
