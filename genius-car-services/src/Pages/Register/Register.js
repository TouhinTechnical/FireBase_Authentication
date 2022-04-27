import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        console.log('user', user);
    }

    const handlerRegister = async (event) =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
        
    }
    return (
        <div className='registerFrom'>
            <h2 className='text-center text-primary m-3'>Please Register</h2>
            <form onSubmit={handlerRegister}>
                
                <input type="text" name='name' placeholder='Enter your own name'/> 

               <input type="email" name='email'  placeholder='Enter your email address' required/> 

               <input type="password" name='password' placeholder='Enter your password' required/> 
               
               <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
               <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept Genius Car Terms and Conditions</label>
               <input disabled={!agree} className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='mt-2'>Already have a account ? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;