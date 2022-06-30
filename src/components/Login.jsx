import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/clubs')
    } catch (e) {
      setError('Email or password did not match')
      console.log(e.message)
    }
  };

  return (
    <div className='max-w-50 mx-auto my-16 p-4 '>
      <div>
        <h1 className='w-50 text-center mt-2'>Sign in to your account</h1>
        <p className='w-50 text-center mt-2'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <Form className='w-25' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
        </Form.Group>
        <Button type="submit" className='w-50' class="btn btn-primary" style={{ marginTop: "10px" }}>
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;