import React from 'react';
import useFirebase from './../../Hooks/useFirebase';

const Login = () => {
    const { signinWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={signinWithGoogle}>Google sign in</button>
            </div>
            <br /> <br />
            <form >

                <input type="email" name="" placeholder='enter your email' id="" />
                <br /> <br />
                <input type="password" placeholder='enter your password' name="" id="" />
                <br /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;