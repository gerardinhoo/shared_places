import React from 'react';
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <div className="place-form">
      <Input 
        element="input" 
        type="text" 
        label="Title"
        validators={[]}
        errorText="Please Enter A Valid Title"
      />
    </div>
  )
};

export default NewPlace;