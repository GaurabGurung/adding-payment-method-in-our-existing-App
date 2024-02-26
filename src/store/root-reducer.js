import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { favourtiesReducer } from "./favourites/favourites.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  favourites: favourtiesReducer,
});
/**
    rootReducer holds all the small reducers and store the key name with the small Reducer function itself. 
 */
