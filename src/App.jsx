import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AnecdotesList from "./components/AnecdotesList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import { setAnecdotes } from "./reducers/anecdoteReducer";
import anecdotesService from "./services/anecdotesService";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification></Notification>
      <Filter></Filter>
      <AnecdotesList></AnecdotesList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  );
};

export default App;
