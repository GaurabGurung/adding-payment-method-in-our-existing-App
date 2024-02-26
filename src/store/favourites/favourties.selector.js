import { createSelector } from "reselect";

const selectFavouritesReducer = (state) => state.favourites;

export const selectFavouriteItems = createSelector(
  [selectFavouritesReducer],
  (favourites) => favourites.favouriteItems
);

export const selectFavouriteCount = createSelector(
  [selectFavouritesReducer],
  (favourites) => favourites.favCount
);
