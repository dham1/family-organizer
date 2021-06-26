import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;


  const handleSubmit = async event => {
    event.preventDefault();


    const validate = validateForm();
    if (validate) {
      signUpStart({ displayName, email, password });
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const validateForm = () => {
    let email = document.forms["sign-up-form"]["email"].value;
    let displayName = document.forms["sign-up-form"]["displayName"].value;
    let password = document.forms["sign-up-form"]["password"].value;
    let confirmPassword = document.forms["sign-up-form"]["confirmPassword"].value;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = true;

    //displayname
    if (!displayName) {
      document.getElementById("displayName").innerHTML = "Your name is required"
      result = false;
    } else {
      document.getElementById("displayName").innerHTML = ""

    }
    //email
    if (!email) {
      document.getElementById("email").innerHTML = "Email is required";
      result = false;
    } else if (!re.test(String(email).toLowerCase())) {
      document.getElementById("email").innerHTML = "Invalid email format";
      result = false;

    } else {
      document.getElementById("email").innerHTML = "";

    }

    //password
    if (!password) {
      document.getElementById("password").innerHTML = "Password is required"
      result = false;
    } else {
      document.getElementById("password").innerHTML = ""

    }
    if (!confirmPassword) {
      document.getElementById("confirmPassword").innerHTML = "Password confirmation is required"
      result = false;
    } else {
      document.getElementById("confirmPassword").innerHTML = ""

    }
    if (password !== confirmPassword) {
      document.getElementById("confirmPassword").innerHTML = "Password and password confirmation must be the same"
      result = false;
    }


    return result;
  }

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form name="sign-up-form" className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          id="displayName"
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          id="email"
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          id="password"
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          id="confirmPassword"
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
