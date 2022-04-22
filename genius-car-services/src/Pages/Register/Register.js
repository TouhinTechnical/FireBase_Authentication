import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }

    const handlerRegister = event =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='registerFrom'>
            <h2 className='text-center text-primary m-3'>Please Register</h2>
            <form onSubmit={handlerRegister}>
                
                <input type="text" name='name' placeholder='Enter your own name'/> 

               <input type="email" name='email'  placeholder='Enter your email address' required/> 

               <input type="password" name='password' placeholder='Enter your password' required/> 

               <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-2'>Already have a account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;