import React, {useState, useContext} from 'react';
import Card from "../../shared/components/UIElements/Card"
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import {AuthContext} from "../../shared/context/auth-context"
import "./Auth.css";

const Auth = () => {

  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
        email: {
          value: '',
          isValid: false
        },
        password: {
          value: '',
          isValid: false
      }  
    }  
  );
  
  const switchModeHandler = () => {
    if(!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: "",
          isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode);
  }

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
    auth.login();
  };

  

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
       <form  onSubmit={authSubmitHandler}>
         {!isLoginMode && (
            <Input
            id="name"
            element="input"
            type="name"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE(5)]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />
          )
         }
          <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL(10)]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password (at least 5 characters)."
            onInput={inputHandler}
          />
      <Button type="submit" disabled={!formState.isValid}>
        {isLoginMode ? "LOGIN" : "SIGNUP"}
      </Button>
    </form>
      <Button inverse onClick={switchModeHandler}>
       {isLoginMode ? "SIGNUP" : "LOGIN"} SWITCH TO SIGNUP
      </Button>
    </Card>
   
  );
};

export default Auth;
