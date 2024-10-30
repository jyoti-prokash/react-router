import { Link } from "react-router-dom";

const User = ({user}) => {
    return (
        <div className='user'>
            <h2>name:{user.name}</h2>
            <p>username:{user.username}</p>
            <p>email:{user.email}</p>
            <Link to={`/user/${user.id}`}>Details</Link>
        </div>
    );
};

export default User;