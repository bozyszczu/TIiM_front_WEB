import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      this.props.navigate('/clubs')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-50 mx-auto my-16 p-4 '>
      <div>
        <h1 className='w-50 text-center mt-2'>Sign up for a free account</h1>
        <p className='w-50 text-center mt-2'>
          Already have an account yet?{' '}
          <Link to='/login' className='underline'>
            Log in.
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
        <Button type="submit" className='w-50' variant='success' style={{ marginTop: "10px" }}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;