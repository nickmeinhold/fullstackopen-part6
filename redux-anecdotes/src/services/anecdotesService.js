const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return await response.json();
};

const createNew = async (content) => {
  content.votes = 0;
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};

const vote = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });

  if (!response.ok) {
    throw new Error("Failed to vote");
  }

  return await response.json();
};

export default { getAll, createNew, vote };
