import React from 'react';
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_REQUIRE} from "../../shared/components/util/validators"
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <div className="place-form">
      <Input 
        element="input" 
        type="text" 
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter A Valid Title"
      />
    </div>
  )
};

export default NewPlace;