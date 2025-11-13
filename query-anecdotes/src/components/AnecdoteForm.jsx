import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnnecdote } from "../requests";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log("new anecdote");
    newAnecdoteMutation.mutate({ content: content });
  };

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
      {newAnecdoteMutation.isError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Error: {newAnecdoteMutation.error.message}
        </div>
      )}
    </div>
  );
};

export default AnecdoteForm;
