

const LogicalAndAnd = () => {
    let status=true;
    return (
        <div>
            <h1>User</h1>
            {status && <button>Logout</button>}
        </div>
    );
};

export default LogicalAndAnd;