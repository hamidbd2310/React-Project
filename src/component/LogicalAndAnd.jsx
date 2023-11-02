

const LogicalAndAnd = () => {
    let status=false;
    return (
        <div>
            <h1>User</h1>
            {status && <button>Logout</button>}
        </div>
    );
};

export default LogicalAndAnd;