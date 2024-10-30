import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer, { FAVORITE_PERSISTENT_STATE } from "./favorite.slice";
import { saveState } from "./storage";

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer
    }
})

store.subscribe(() => {
    saveState(FAVORITE_PERSISTENT_STATE, store.getState().favorite.movies);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;