import React from 'react';
import Landing from '../Components/Landing';
import growth from '../images/vectorImages/growth2.svg';

const About = (props) => {
  console.log('props in about', props);
  return (
    <>
      <Landing
        name="OneStoreBooks"
        imgsrc={growth}
        visit={'/'}
        btname1="Get Started"
        para="Your new favourite one stop shop when it comes to buying books online!"
      />
    </>
  );
};

export default About;
