import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { initializeAnecdotes } from "./reducers/anecdotesReducer";

import AnecdotesList from "./components/AnecdotesList";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
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
