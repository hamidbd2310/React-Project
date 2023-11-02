

const IMIF2 = () => {
    let status=false;
    return (
        <div>
              {(()=>{

if(status==true){
    return <button>Login</button>
}
else{
    return <button>Logout</button>
}
})()}
        </div>
    );
};

export default IMIF2;