import { createSelector } from "reselect";

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectUser = (state) => state.user;

export const selectUserIsLoading = createSelector(
  [selectUser],
  (userSlice) => userSlice.isLoading
);
