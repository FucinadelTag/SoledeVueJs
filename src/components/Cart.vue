<template>
<form>
    <table class="table table-hover product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="product in cartData.items" track-by="id" v-on:click.prevent="onEdit(product)">
                <td>{{product.name}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}:-</td>
                <td><a href="#" v-on:click.prevent.stop="onRemove(product)">remove</a></td>
            </tr>
            <tr v-if="!cartData.items">
                <td colspan="4" class="p-y-3 text-xs-center">
                    <strong>You should add some products!</strong>
                </td>
          </tr>
        </tbody>
    </table>
</form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['cartData']
}
</script>
