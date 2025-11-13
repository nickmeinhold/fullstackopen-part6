const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(`Error: request returned status ${response.status}`);
  }
  return await response.json();
};

export const createAnnecdote = async (newAnecdote) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...newAnecdote, votes: 0 }),
  };

  const response = await fetch(baseUrl, options);

  if (!response.ok) {
    let errorMessage = `Status ${response.status}`;
    try {
      const errorBody = await response.json();
      errorMessage =
        errorBody.message || errorBody.error || JSON.stringify(errorBody);
    } catch (e) {
      // Response wasn't JSON, use status only
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};

export const updateAnecdote = async (updatedAnecdote) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedAnecdote),
  };

  const response = await fetch(`${baseUrl}/${updatedAnecdote.id}`, options);

  if (!response.ok) {
    let errorMessage = `Status ${response.status}`;
    try {
      const errorBody = await response.json();
      errorMessage =
        errorBody.message || errorBody.error || JSON.stringify(errorBody);
    } catch (e) {
      // Response wasn't JSON, use status only
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};
