import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdotesReducer";
import anecdotesService from "../services/anecdotesService";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    if (content) {
      e.target.anecdote.value = "";
      const newAnecdote = await anecdotesService.createNew(content);
      dispatch(createAnecdote(newAnecdote));
    }
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
