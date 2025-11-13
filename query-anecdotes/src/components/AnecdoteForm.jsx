import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnnecdote } from "../requests";
import { useContext } from "react";
import NotificationContext from "./NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

  const { dispatchNotification } = useContext(NotificationContext);

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    if (content.length < 5) {
      dispatchNotification({
        type: "SHOW",
        payload: "too short anecdote, must have at least 5 letters",
      });
      event.target.anecdote.value = "";
      return;
    }

    event.target.anecdote.value = "";
    console.log("new anecdote");
    newAnecdoteMutation.mutate({ content: content });
  };

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnnecdote,
    onSuccess: (data) => {
      dispatchNotification({
        type: "SHOW",
        payload: `Added: ${data.content}`,
      });
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
