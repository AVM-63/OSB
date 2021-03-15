import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from "./Home";
// import Categories from "./Categories";
import About from "./About";
import MyAccount from "./MyAccount";
import Navbar from "./ComponentsF/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Mystery from "./categoryPages/Mystery";
import TopSellers from "./categoryPages/TopSellers";
import Fiction from "./categoryPages/Fiction";
import TrueCrime from "./categoryPages/TrueCrime";
import Biographies from "./categoryPages/Biographies";
import AllBooks from "./categoryPages/AllBooks";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={AllBooks} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/categories" component={AllBooks} />
        <Route exact path="/categories/biographies" component={Biographies} />
        <Route exact path="/categories/fiction" component={Fiction} />
        <Route exact path="/categories/mystery" component={Mystery} />
        <Route exact path="/categories/true-crime" component={TrueCrime} />
        <Route exact path="/categories/top-sellers" component={TopSellers} />
        <Route exact path="/categories/all-books" component={AllBooks} />
        <Route exact path="/myaccount" component={MyAccount} />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* <Route exact path="/listbooks" component={ListBooks} /> */}
        <Redirect to="/categories/all-books" />
        <AllBooks />
      </Switch>
    </>
  );
};

export default App;
