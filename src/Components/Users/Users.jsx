import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>users: {users.length}</h1>
            <h2>users list</h2>
            <div>
            {
            users.map(user => <User user={user}></User>)
            }
            </div>
        </div>
        
    );
};

export default Users;