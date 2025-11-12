import { useSelector, useDispatch } from "react-redux";
import { voteNotification } from "../reducers/notificationReducer";
import { voteForAnecdote } from "../reducers/anecdotesReducer";

const AnecdotesList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const handleVote = (id, content) => {
    dispatch(voteForAnecdote(id));
    dispatch(voteNotification(content));
  };

  return anecdotes
    .filter((a) => a.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)
    .map((anecdote) => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleVote(anecdote.id, anecdote.content)}>
            vote
          </button>
        </div>
      </div>
    ));
};

export default AnecdotesList;
