import './App.css';
import app from './firebase_init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // Sign In
  const handleGoogleSignIn = () =>{
    // console.log('working');
    signInWithPopup(auth, googleProvider)
    .then(res =>{
      const user = res.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  // Github
  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(res =>{
      const user = res.user;
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
    .then(() =>{
      setUser({});
    })
    .catch(error =>{
      console.log(error, setUser({}))
    })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> 
        : 
        <>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        <button onClick={handleGithubSignIn}>Sign In with Github</button>
        </> 
      }
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
