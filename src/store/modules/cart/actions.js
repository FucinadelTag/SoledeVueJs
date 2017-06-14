import * as types from './mutation-types'
import  marcketcloud from '../../../servicies/marcketcloud'

export function addToCart ({ commit }, productId) {

    let MarketCloud = marcketcloud.getMarketCloud();

    let cartId = JSON.parse(localStorage.getItem('cartId'))

    console.log (cartId);

    if (cartId > 0){
        MarketCloud.carts.add(cartId, [
            {'product_id':productId,'quantity':1}
        ],function(err,response){
            if (err) {
                console.log (err);
            } else {
                commit(types.SAVE_CART, response.data);
            }
        });
    } else {
        MarketCloud.carts.create({
            items:[{'product_id': productId,'quantity': 1}]
        },function(err,response){
            if (err) {
                console.log (err);
            } else {
                localStorage.setItem('cartId', JSON.stringify(response.data.id));
                commit(types.SAVE_CART, response.data);
            }
        });
    }

}

export function initCart ({commit}) {

    let cartId = JSON.parse(localStorage.getItem('cartId'))

    if (cartId){
        let MarketCloud = marcketcloud.getMarketCloud();
        MarketCloud.carts.getById(cartId).then ((response)=>{
            commit(types.SAVE_CART, response.data);
        });
    }
}