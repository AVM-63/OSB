import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './pages/About';
import MainAccountPage from './pages/MainAccountPage';
import MyAccount from './pages/MyAccount';
import Navbar from './Components/Navbar';
import {
  Router,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import FormSignup from './pages/FormF/FormSignup';
import FormLogin from './pages/FormF/FormLogin';
import IndBook from './Components/IndBook';
import Topics from './pages/categoryPages/Topics';
import Footer from './Components/Footer';
import Form from './pages/FormF/Form';
import Form2 from './pages/FormF/Form2';
import RazorPayPage from './Components/RazorPayPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/categories/:category" component={Topics} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/myaccount/form-signup" component={FormSignup} />
        <Route exact path="/myaccount/form-login" component={FormLogin} />
        <Route exact path="/myaccount/form" component={Form} />
        <Route exact path="/myaccount/form2" component={Form2} />
        <Route path="/book/:id" component={IndBook} />
        <Route path="/myaccount/user" component={MainAccountPage} />
        <Route path="/razorpay" component={RazorPayPage} />
        <Redirect to="/categories/all-books" />
      </Switch>
      <div className="d-none d-lg-block">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// MA
