import { combineReducers } from "redux";

import search from "./search";
import control from "./control";
import indentifier from "./indentifier";
import cocktail from "./cocktail";
import selected from "./selected";
import random from "./random";
import randomCocktailOne from "./randomCocktailOne";
import randomCocktailTwo from "./randomCocktailTwo";
import randomCocktailThree from "./randomCocktailThree";
const reducers = combineReducers({
  search,
  control,
  indentifier,
  cocktail,
  selected,
  randomCocktailOne,
  randomCocktailTwo,
  randomCocktailThree,
  random
});

export default reducers;
