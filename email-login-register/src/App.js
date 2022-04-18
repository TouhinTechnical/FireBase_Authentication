import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './firebase_init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  // data neoya
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailverify, setEmailverify] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [register, setRegister] = useState(false);

  // user name
  const handleNameBlur = event =>{
    setName(event.target.value);
  }
  // Email
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  // Password
  const handlePassBlur = event =>{
    setPass(event.target.value);
  }

  const handleRegisteredChange = event =>{
    // console.log(event.target.checked);
    setRegister(event.target.checked);
  } // check felid click korle text change hobe

  // Submit
  const handleFormSubmit = event =>{
  // console.log('form submitted', email, pass);

  // validation
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
      // return;
    }
    // password check valid
    if(!/(?=.*?[#?!@$%^&*-])/.test(pass)){
      event.preventDefault();
      setError('Password Should contain at least one special character');
      return;
    }
    setValidated(true); //password check valid
    setError(''); // error empty korar jnno

    // jodi register kora take taile email pass diye login korbe nahyle register koro
    if(register){
      // console.log(email,pass);
      signInWithEmailAndPassword(auth, email, pass)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.log(error);
        setError(error.message);
      })
    }
    else{
      createUserWithEmailAndPassword(auth, email, pass)
      .then(result =>{
      const user = result.user;
      console.log(user);
      // register successful hole form ta empty hye jabe
      setEmail(''); // empty email
      setPass(''); // empty password
      verifyEmail(); // verify email
      setUserName(); // user name
      setSuccess('Registration Successful');
      })
      .catch(error =>{
        console.error(error);
        setError(error.message);
      })
    }
    event.preventDefault(); // form reload off korar jonno
  }
  // password reset email
  const handlePasswordReset = () =>{
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      console.log('Email sent');
    })
  }
  // user name set kora jonno
  const setUserName = () =>{
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then( ()=>{
      console.log('updating name');
    })
    .catch(error =>{
      setError(error.message);
    })
    
  }
  // user sotik email dice kina oita check korar jonno verify korar jonno
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(() =>{
      console.log('Email Verification Sent');
      setEmailverify('Email Verification Sent');
    })
  }
  return (
    <div>
      {/* <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" /><br />
        <input onBlur={handlePassBlur} type="password" /><br />
        <input type="submit" value="Login"/>
      </form> */}
      <div className="registration w-50 mx-auto mt-4">
        <h2 className="text-primary">Please {register ? 'Login' : 'Register'}</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}> {/* valid jonno(noValidate validated={validated}) */}
          {/* ei name field ta sodu register somoy dakabo login smy dakabe nh */}
          { !register && 
            <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your Name" required />
            <Form.Control.Feedback type="invalid">
              please provide a your name
            </Form.Control.Feedback> {/* valid name type */}
            </Form.Group>
          }

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>

            <Form.Control.Feedback type="invalid">
              please provide a valid email
            </Form.Control.Feedback> {/* valid email type */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" required />

            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback> {/* valid password type */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" /> {/* check out click korle opore title text change hobe */}
          </Form.Group>
          
          <p className='text-info'>{emailverify}</p> {/* error show */}
          <p className='text-danger'>{error}</p> {/* error show */}
          <p className='text-success'>{success}</p> {/* error show */}
          
          <Button onClick={handlePasswordReset} variant="link">Forget Password</Button> <br />
          <Button variant="primary" type="submit">
            {register ? 'Login' : 'Register'} {/* checkbox click korle button text change hobe */}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
