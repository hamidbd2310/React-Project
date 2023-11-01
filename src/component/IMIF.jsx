

const IMIF = () => {
    let marks=22;
    return (
        <div>
      {
        (
            ()=>{
                if (marks>=80 && marks<=100)
                return <h1>A+</h1>
                else if (marks>=70 && marks<80)
                return <h1>A</h1>
                else if (marks>=33 && marks<70)
                return <h1>Pass</h1>
                else if (marks>=0 && marks<33)
                return <h1>Fail</h1>
                
                
                else
                return <h1>No Result</h1>
            }
        )()
      }

            
        </div>
    );
};

export default IMIF;