import marketcloud from 'marketcloud-js'
import axios from 'axios'

class marketCloudService {

    constructor() {
        this.marketcloud = new Marketcloud.Client({
            "public_key" : process.env.MARKETCLOUD.public_key
        })



        this.axios = axios.create({
            baseURL: 'https://api.marketcloud.it/v0/',
            timeout: 1000,
            headers: {
                'Authorization': process.env.MARKETCLOUD.public_key,
                'accept': 'application/json',
                'content-type': 'application/json'

            }
        });

    }

    getUser () {
        // method body code here
        if (this.marketcloud.token) {
                // Then the user is authenticated and its data is in
            return this.marketcloud.currentUser
        } else {
            // User not authenticated, prompt the user for username and password
            return false
        }

     }

    async getProductById (id) {
        // method body code here
        try {

            let responese = await this.marketcloud.products.getById(id);

            console.log (responese.data)

            return (responese.data);

        } catch (error) {
            return error;
        }

        //console.log (product);

     }

    async login (userData) {
        // method body code here
        try {

        let response = await this.marketcloud.users.authenticate(userData.email, userData.password);

            return response;

        } catch (error) {
            return error;
        }


    }

    getMarketCloud (){
        return this.marketcloud;
    }
}


export default new marketCloudService();