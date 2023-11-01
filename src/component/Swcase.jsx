

const Swcase = () => {

    const status=true;

    switch(status){
        case true:
            return <button>Login</button>
        case false:
            return <button>Logout</button>
        default:
            return null
    }
}

export default Swcase;