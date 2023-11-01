

const LoopMap = () => {
    const city=['Dhaka', 'Chuadanga', 'Khulna']
    return (
        <div>
            
                {
                    city.map((item,i)=>{
                        return<h1 key={i.toString}>{item}</h1>
                    })
                }
            
            
        </div>
    );
};

export default LoopMap;