import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import MyAccount from "./MyAccount";
import Navbar from "./ComponentsF/Navbar";
// import ListBooks from "./ComponentsF/ListBooks";
import { Switch, Route, Redirect } from "react-router-dom";


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/listbooks" component={ListBooks} /> */}
        <Redirect to="/home" />
        <Home />
      </Switch>
    </>
  );
};

export default App;
