import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Users = () => {
    const handleRemove= _id=> {
        console.log(_id);
    }

    const users= useLoaderData();
    return (
        <div>
            <h2>Users Data: {users.length}</h2>
            {
                users.map(user=> <p key={user._id}>{user.name} : {user.email} <button onClick={()=> handleRemove(user._id)}>X</button></p>)
                
            }
        </div>
    );
};

export default Users;