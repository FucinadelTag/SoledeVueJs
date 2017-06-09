export function initialState () {

    let user = localStorage.getItem("user")

    if (user){
        return user
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
