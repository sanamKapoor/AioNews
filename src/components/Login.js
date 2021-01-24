import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import avatar from "./img/user-icon.png";

function Login() {

    const [isLogin, setLogin] = useState(false);
    const { register, handleSubmit, errors, watch, reset } = useForm({ mode: 'onChange'});
    const [err, setError] = useState(false);
    let userCreated  = true;

    let history = useHistory(); 
  
    const sameEmail = (user, values) => {
  
      if(isLogin){
        
        if(user.email === values.email && user.password === values.password){
          history.push(`/${process.env.REACT_APP_DOMAIN}/home`, { user: user });
          reset();
          return;
        } 
        else {
          setError('Please enter correct email and password.');
  
          setTimeout(() => {
            setError('')
          }, 2000)
  
          reset();
          return;
        }
      } 
      else {
        setError('User with this email already exist.');
  
        setTimeout(() => {
          setError('')
        }, 2000)
  
        reset();
        }
    } 
  
    const diffEmail = (user, values) => {
      if(isLogin){
        setError('User with this email does not exist.');
  
          setTimeout(() => {
            setError('')
          }, 2000)
  
          reset();
          return;
      } 
    }
  
    const newUser = (values) => {
      if(!isLogin){
  
        let user = {
          email: values.email,
          password: values.password,
          savedNews: []
        }
  
        let Users = [];
        Users.push(user);
        localStorage.setItem('users', JSON.stringify(Users));
        
        reset();
        history.push(`/${process.env.REACT_APP_DOMAIN}/home`, { user: user });
        return;
      } else {
        setError('You need to register first.');
  
        setTimeout(() => {
          setError('')
        }, 2000)
  
        reset();
        return;
      }
    }
  
    const createUser = (values) => {
      if(!isLogin){
  
      let user = {
        email: values.email,
        password: values.password,
        savedNews: []
      }
  
      let users = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      history.push(`/${process.env.REACT_APP_DOMAIN}/home`, { user: user });
  
      reset();
      return;
      }
    }
   
    const Submit = values => {
  
      let users = JSON.parse(localStorage.getItem('users'));
  
      if(users){
        for(let user of users){
          if(user.email === values.email){
            sameEmail(user, values);
            return;
          } else {
            diffEmail(user, values);
          }
        }
      } else {
        newUser(values);
        return;
      }
  
      if(userCreated){
        createUser(values);
      } 
    }
  
    const clearError = (errors) => {
      setTimeout(() => {
        errors.email = null
        errors.password = null
        errors.confirmPassword = null
      }, 1000)
    }
  
    useEffect(() => {
      clearError(errors)
    }, [errors])
  
    return (
        <article>
        <form onSubmit={handleSubmit(Submit)} className="form p-4 p-lg-5 text-primary shadow">
            <div className="text-center">
            <img src={avatar} className="user-img" alt=""/>
            </div>
          <input 
              type="email" 
              name="email"
              ref={
                register({
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                })
              }
              placeholder="Enter Email" 
              className="form-text mt-4 form-control shadow-sm border-0 rounded-pill px-3" />
              {
                errors.email && <small className="text-danger mx-3">{errors.email.message}</small>
              }

            <input 
              type="password" 
              name="password" 
              ref={
                register({
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password should be 6 characters long'
                  }
                })
              }
              placeholder="Enter Password" 
              className="form-text mt-3 form-control shadow-sm border-0 rounded-pill px-3" />
              {
                errors.password && <small className="text-danger mx-3">{errors.password.message}</small>
              }          
              
              {
              !isLogin ?
                <input 
                type="password" 
                name="confirmPassword" 
                ref={
                  register({
                    required: 'Confirm your password',
                    validate: (value) => value === watch('password') || "Password don't match"
                  })
                }
                placeholder="Confirm Password" 
                className="form-text mt-3 form-control shadow-sm border-0 rounded-pill px-3" />              
                : ''
             }
            { 
            (!isLogin && errors.confirmPassword) && <small className="text-danger mx-3">{errors.confirmPassword.message}</small>
            }

          <div className="my-3 text-center">
            { err && <small className="text-danger mb-1">{err}</small>}
            <button type="submit" className="form-text btn btn-primary btn-block shadow rounded-pill">
            { isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
          <div className="text-center">
            <span onClick={() => setLogin(!isLogin)} className="form-text text-dark switch-btn">
            { !isLogin ? 'Login' : 'Register'}
            </span>
          </div>
        </form>
        </article>
    )
}

export default Login
