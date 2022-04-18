import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>this is home</h2>
            <p>Current user is: {user ? user.displayName : 'No body'}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;