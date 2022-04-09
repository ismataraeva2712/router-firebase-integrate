import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, handleSignout } = useFirebase()
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.displayName && user.displayName
                }
                {
                    user.uid ? <button onClick={handleSignout}>Sign out</button> :
                        <Link to='/login'>login</Link>


                }
            </nav>
        </div>
    );
};

export default Header;