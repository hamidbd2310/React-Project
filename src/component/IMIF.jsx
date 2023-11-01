

const IMIF = () => {
    let marks=22;
    return (
        <div>
      {(()=>{
                if (marks>=80 && marks<=100)
                return <p>A+</p>
                else if (marks>=70 && marks<80)
                return <p>A</p>
                else if (marks>=33 && marks<70)
                return <p>Pass</p>
                else if (marks>=0 && marks<33)
                return <p style={{color:'red'}}>Fail</p>
                
                
                else
                return <p>No Result</p>
            })()}

            
        </div>
    );
};

export default IMIF;