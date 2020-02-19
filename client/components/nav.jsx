import React from "react";
import { updateControl, fetchRandom } from "../actions";
import { connect } from "react-redux";
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  handleClickSearch = e => {
    if (this.props.control === 0) {
      this.props.dispatch(updateControl(1));
    } else {
      this.props.dispatch(updateControl(0));
    }
  };
  handleClickRandom = e => {
    this.props.dispatch(fetchRandom(0));
  };
  handleClickSignIn = e => {
    this.props.dispatch(updateControl(4));
  };
  render() {
    return (
      <div className="nav">
        <button className="navbutton" onClick={this.handleClickRandom}>
          Randon Cocktail
        </button>

        <button className="navbuttonsearch" onClick={this.handleClickSearch}>
          Search
        </button>
        <IfAuthenticated>
          <button className="navbutton" onClick={this.handleClickSignOut}>
            Sign Out
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className="navbutton" onClick={this.handleClickSignIn}>
            Sign In
          </button>
        </IfNotAuthenticated>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    control: state.control,
    random: state.random
  };
}

export default connect(mapStateToProps)(Nav);
