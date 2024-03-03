import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesfailed,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesfailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    //takeLatest gives you the lastest action when ever there is a similar call
    CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_START,
    fetchCategoriesAsync
  );
}
//The onFetchCategories saga listens for the FETCH_CATEGPRIES_START action and triggers the fetchCategoriesAsync generator function.

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
