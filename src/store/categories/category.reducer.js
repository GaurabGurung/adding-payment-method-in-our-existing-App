import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categories : [],
    isLoading:  false,  //this is for the reducer to find whether or not, if its in the loading state
    error: null,  // to be aware of any error on the fetching process of a async function
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => { //action = {} means, if no action is called the action still runs so that we can get a default state

    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_START:
            return {...state, isLoading: true}
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_SUCESS:
            return {...state, categories: payload, isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_FAILED:
            return {...state, error: payload, isLoading: false};
        default :
            return state;
    }
}