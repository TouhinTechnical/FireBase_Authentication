import { useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase.init'; // 1st step (app ta import kora)
const auth = getAuth(app); // 2nd step (getAuth ta import kora)
const googleProvider = new GoogleAuthProvider(); // 3rd step (GoogleAuthProvider ta import kora)

// ei function holo hook hisabe use kora function
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () =>{
        // 4th step
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    // sign out
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{})
    }
    // header login hoyer por login ta remove hye signout hoi r jnno user set kora
    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    }, [])
    return {user, signInWithGoogle, handleSignOut}
}

export default useFirebase;