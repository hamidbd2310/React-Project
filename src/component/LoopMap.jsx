

const LoopMap = () => {
    const city=['Dhaka', 'Chuadanga', 'Khulna']
    return (
        <div>
            
                {
                    city.map((item,i)=>{
                        return<p key={i.toString}>{item}</p>
                    })
                }
            
            
        </div>
    );
};

export default LoopMap;