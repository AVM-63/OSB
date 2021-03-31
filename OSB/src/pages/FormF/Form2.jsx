import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';

const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  console.log(props);
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} props={props.props} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
