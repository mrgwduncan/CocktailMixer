import React from "react";
import { connect } from "react-redux";
import {
  fetchById
} from "../actions";
import { updateControl } from "../actions";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = id => {
    this.props.dispatch(fetchById(id));
    this.props.dispatch(updateControl(3));
  };
  render() {
    console.log(this.props.drink);
    return (
      <div className="resultscontainer">
        {this.props.drink.map(drink => {
          return (
            <div
              className="results"
              onClick={() => this.handleOnClick(drink.idDrink)}
            >
              <img
                className="svg-border-mask"
                src={drink.strDrinkThumb}
                height="100px"
                width="100px"
              ></img>
              <li>{drink.strDrink}</li>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    drink: state.search.drinks,
    selected: state.selected,
    type: state.type
  };
}

export default connect(mapStateToProps)(SearchResults);
