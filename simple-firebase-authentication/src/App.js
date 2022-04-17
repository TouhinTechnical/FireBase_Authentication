import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { useState } from 'react';

// initialize auth
const auth = getAuth(app);
function App() {
  // user data load
  const [user, setUser] = useState([])
  const provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();
  
  // Google sign in
  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  // Github sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, providerGit)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  // Sign Out
  const handleSignOut = () =>{
    signOut(auth)
    .then( () =>{
      setUser({});
    })
    .catch(error =>{
      setUser({});
    })
  }
  return (
    <div className="App">
      {/* condition sign in kora nh takle sign out button ta daka jabe nh jodi sign in kora take tkn sign out button show korbe */}
      {
        user.uid ? <button onClick={handleSignOut}>Sign out</button> 
        : 
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github sign in</button>
        </>
      }
      <h1>Name: {user.displayName}</h1>
      <h4>Email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
