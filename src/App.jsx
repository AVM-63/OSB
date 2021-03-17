import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Home from "./Home";
// import Categories from "./Categories";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import Navbar from "./Components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import FormSignup from "./pages/FormF/FormSignup";
import FormLogin from "./pages/FormF/FormLogin";
import IndBook from "./Components/IndBook";
// import IndBook from "../Components/IndBook";
import Topics from "./pages/categoryPages/Topics";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/categories/:category" component={Topics} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/myaccount/form-signup" component={FormSignup} />
        <Route exact path="/myaccount/form-login" component={FormLogin} />
        <Route path="/book/:id" component={IndBook} />
        <Redirect to="/categories/all-books" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
