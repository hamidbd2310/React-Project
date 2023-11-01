

const IfElse = () => {

    let marks=80;
    return (
        <div>
            {
            marks>=80?
            <p>A+</p>
            :
            <p>A-</p>}
        </div>
    );
};

export default IfElse;