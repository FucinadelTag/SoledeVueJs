import  marcketcloud from '../../../servicies/marcketcloud'

export function initialState () {

    let userData = marcketcloud.getUser();

    if (userData){
        return {
            user: {
                    userId: userData.id,
                    name: userData.name,
                    email: userData.email
                },
            isAuthenticate:JSON.parse(localStorage.getItem('isAuthenticate')),
            message: false
        }
    } else {
        return {
            user: {
                userId: null,
                name: 'Lorenzo',
                email: 'lorenzo@dinoweb.net'
            },
            isAuthenticate: JSON.parse(localStorage.getItem('isAuthenticate')),
            message: false
        }

    }
}

export default initialState()
