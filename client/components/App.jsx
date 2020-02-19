import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { connect } from "react-redux";
import Nav from "./nav";
import DisplayImage from "./DisplayImage.jsx";
import SearchResults from "./SearchResults";
import DrinkResults from "./DrinkResults";
import Search from "./Search.jsx";
import SignIn from "./SignIn";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    switch (this.props.control) {
      case 0:
        return (
          <div className="container">
            <Header />
            <Nav />
            <DisplayImage />
            <Footer />
          </div>
        );
      case 1:
        return (
          <div className="container">
            <Header />
            <Nav />
            <Search />
            <Footer />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <Nav />
            <SearchResults />
            <Search />
            <Footer />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <Nav />
            <Search />
            <DrinkResults />
            <Footer />
          </div>
        );
      case 4:
        return (
          <div className="container">
            <Nav />
            <SignIn />
            <DisplayImage />
            <Footer />
          </div>
        );
      case 5:
        return (
          <div className="container">
            <Nav />
            <Register />
            <DisplayImage />
            <Footer />
          </div>
        );
      default:
        return <Header />;
    }
  }
}
function mapStateToProps(state) {
  return {
    control: state.control
  };
}

export default connect(mapStateToProps)(App);
