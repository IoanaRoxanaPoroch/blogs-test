import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import books from "./components/Books/books";
import Contact from "./components/Contact/Contact";
import Funny from "./components/Funny/funny";
import Home from "./components/Home/Home";
import LifeStyle from "./components/LifeStyle/Lifestyle";
import movies from "./components/Movies/movies";
import Navbar from "./components/Navbar/Navbar";
import travel from "./components/Travel/travel";
import Details from "./components/Books/DetailsBook";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={AboutUs}></Route>
            <Route path="/lifeStyle" component={LifeStyle}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/funny" component={Funny}></Route>
            <Route path="/books" component={books}></Route>
            <Route path="/movies" component={movies}></Route>
            <Route path="/travel" component={travel}></Route>
            <Route path="/details" component={Details}></Route>
          </Switch>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
