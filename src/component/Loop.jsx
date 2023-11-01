

const Loop = () => {

    const city=['Pir Para','Jamal Para','Sapla Para', 'Pirer Sosur bari']
    return (
        <div>
            <ul>
                {
                    city.map((item,i)=>{
                        return<li key={i.toString}>{item}</li>

                    })
                }
            </ul>
        </div>
    );
};

export default Loop;