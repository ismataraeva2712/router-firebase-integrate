import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h2>current user: {user ? user.displayName : "nobody"}</h2>
            <img src={user ? user.photoURL : ''} alt="" />
        </div>
    );
};

export default Home;