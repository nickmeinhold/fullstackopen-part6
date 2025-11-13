import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, updateAnecdote } from "./requests";

const App = () => {
  const queryClient = useQueryClient();

  const handleVote = (anecdote) => {
    updateAnecodeMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
  };

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
  });

  const updateAnecodeMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  console.log(JSON.parse(JSON.stringify(result)));

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return (
      <div>anecdote service not available due to problems on the server</div>
    );
  }

  const anecdotes = result.data;

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
