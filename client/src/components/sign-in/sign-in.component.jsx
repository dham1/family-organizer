import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { toast } from 'react-toastify';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, state }) => {

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;


  const handleSubmit = async event => {
    event.preventDefault();

    const validated = validateForm();
    let errorMessage = "";
    if (validated) {
      emailSignInStart(email, password);
      if (state.error) {
        errorMessage = state.error.message;
      }
    }

    if (errorMessage) {
      console.log(errorMessage);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const validateForm = () => {
    let email = document.forms["sign-in-form"]["email"].value;
    let password = document.forms["sign-in-form"]["password"].value;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let result = true;
    if (!email) {
      document.getElementById("emailError").innerHTML = "Email is required";
      result = false;
    } else if (!re.test(String(email).toLowerCase())) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      result = false;

    } else {
      document.getElementById("emailError").innerHTML = "";

    }

    if (!password) {
      document.getElementById("passwordError").innerHTML = "Password is required"
      result = false;
    } else {
      document.getElementById("passwordError").innerHTML = ""

    }

    return result;
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form name="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          id="emailError"
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          id="passwordError"
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

const mapStateToProps = state => ({
  state: state.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
