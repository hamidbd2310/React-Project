const LoginStatusBtn=(status)=>{
    if(status){
        return <button>Logout</button>
    }
    else{
        return <button>Login</button>
    }
}

const ConditionalRendering = () => {



    return (
        <div>
            {LoginStatusBtn(true)}
        </div>
    );
};

export default ConditionalRendering;