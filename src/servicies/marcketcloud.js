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

    async getProducts () {
        // method body code here
        console.log (this.marketcloud);

        var query = {price_gt:10}

        let products = await this.marketcloud.products.list(query);

        console.log (products);

     }

     async login (userData) {
        // method body code here

        console.log (userData.password);

        // this.axios.post('users/authenticate', {
        //     email: userData.username,
        //     password: userData.password
        // })
        //   .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        try {

        let response = await this.marketcloud.users.authenticate(userData.email, userData.password);

        return response;

        } catch (error) {
            return error;
        }


     }
}


export default new marketCloudService();