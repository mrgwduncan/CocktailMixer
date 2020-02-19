import React, { Component } from "react";
import { fetchById } from "../actions";
import { connect } from "react-redux";

class DrinkResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="drinkresults">
        {this.props.cocktail.strDrink && (
          <div className="drinkcontainer">
            <h2>{this.props.cocktail.strDrink}</h2>
            <p>Category: {this.props.cocktail.strCategory}</p>
            <p>Glass type: {this.props.cocktail.strGlass}</p>
            <p>Instructions: {this.props.cocktail.strInstructions}</p>
            <p>Ingredients</p>
            <ul>
              {this.props.cocktail.ingredients.map(results => (
                <li>
                  {results.ing} : {results.measure}
                </li>
              ))}
            </ul>
            <img src={this.props.cocktail.strDrinkThumb}></img>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    id: state.indentifier,
    cocktail: state.cocktail
  };
}

export default connect(mapStateToProps)(DrinkResults);
