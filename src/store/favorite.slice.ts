import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieProps } from "../interfaces/movie.interface";

export interface FavoriteState {
    movies: movieProps[]
}

const initialState: FavoriteState = {
    movies: []
}

export const favoriteSlice = createSlice(
    {
        name: 'favorite',
        initialState,
        reducers: {
            addToFavorite: (state, action: PayloadAction<movieProps>) => {
                state.movies.push(action.payload)
            },
            deleteFavorite: (state, action: PayloadAction<string>) => {
                state.movies = state.movies.filter((movie) => movie["#IMDB_ID"] === action.payload);
            }
        }
    }
)

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
   