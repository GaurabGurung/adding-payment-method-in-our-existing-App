import { FAVOURITES_ACTION_TYPES } from "../favourites/favaurites.types";

const INITIAL_STATE = {
  favouriteItems: [],
  favCount: 0,
};

export const favourtiesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FAVOURITES_ACTION_TYPES.SET_FAVOURITES_ITEM:
      return {
        ...state,
        favouriteItems: payload,
      };
    default:
      return state;
  }
};
