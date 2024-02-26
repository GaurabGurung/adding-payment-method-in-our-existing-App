import { createAction } from "../../utils/reducer/reducer.utils";
import { FAVOURITES_ACTION_TYPES } from "./favaurites.types";

export const addToFavourites = (favouritesArray, favItemToAdd) => {
  const existingFavItem = favouritesArray.find(
    (item) => item.id === favItemToAdd.id
  );

  if (!existingFavItem) {
    const newFavArray = [...favouritesArray, favItemToAdd];
    return createAction(
      FAVOURITES_ACTION_TYPES.SET_FAVOURITES_ITEM,
      newFavArray
    );
  } else {
    const newFavArray = favouritesArray.filter(
      (product) => product.id !== existingFavItem.id
    );
    return createAction(
      FAVOURITES_ACTION_TYPES.SET_FAVOURITES_ITEM,
      newFavArray
    );
  }
};
