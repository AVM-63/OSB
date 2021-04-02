import React from 'react';
import Form2 from './FormF/Form2';
import MainAccountPage from './MainAccountPage';

const MyAccount = (props) => {
  var bookC1 = props.location.bookContent;
  console.log('passed content', bookC1);
  return (
    <>
      <>
        <Form2 props={props} bookprice={bookC1} />
        {/* <MainAccountPage /> */}
      </>
    </>
  );
};

export default MyAccount;
