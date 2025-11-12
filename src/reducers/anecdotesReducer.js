import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    vote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      if (anecdoteToChange) {
        anecdoteToChange.votes += 1;
      }
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const appendAnecdote = (anecdote) => {
  return async (dispatch) => {
    const savedAnecdote = await anecdotesService.createNew(anecdote);
    dispatch(createAnecdote(savedAnecdote));
  };
};

export const { createAnecdote, vote, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
