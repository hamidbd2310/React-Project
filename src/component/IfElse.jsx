

const IfElse = () => {

    let marks=80;
    return (
        <div>
            {
            marks>=80?
            <h1>A+</h1>
            :
            <h1>A-</h1>}
        </div>
    );
};

export default IfElse;