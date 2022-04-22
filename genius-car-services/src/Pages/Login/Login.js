import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    // useRef 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate(from, { replace: true });
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () =>{
        navigate('/register');
    }   
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2 mb-2'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <p className='mt-2'>New to Genius Car ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;