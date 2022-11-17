import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth, signInWithGoogle} from '../utils/firebase';

const Login = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            {!user?<div className="ball"></div>:<Navigate to={'/'} />}
            <div className="card-l">
                <div className="title-l">Learn School</div>
                <div className="subtitle-l">"Let's Learn without Distraction"</div>
                <div onClick={signInWithGoogle} className="login-button">Login with Google</div>
            </div>
        </div>
    )
}

export default Login