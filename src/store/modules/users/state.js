import  marcketcloud from '../../../servicies/marcketcloud'

export function initialState () {

    let userData = marcketcloud.getUser();

    if (userData){
        return {
            user: {
                    isAuthenticate: true,
                    userId: userData.id,
                    nome: userData.name,
                    email: userData.email
                }
        }
    } else {
        return {
            user: {
                isAuthenticate: false,
                userId: null,
                nome: 'Lorenzo',
                cognome: 'Caldara',
                username: 'lorenzo@dinoweb.net',
                email: 'lorenzo@dinoweb.net'
            }
        }

    }
}

export default initialState()
