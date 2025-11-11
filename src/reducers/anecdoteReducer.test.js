import deepFreeze from "deep-freeze";
import { describe, expect, test } from "vitest";
import anecdoteReducer from "./anecdoteReducer";

describe("anecdoteReducer", () => {
  test("returns new state with action anecodtes/createAnecdote", () => {
    const state = [];
    const action = {
      type: "anecdotes/createAnecdote",
      payload: "the app state is in redux store",
    };

    deepFreeze(state);
    const newState = anecdoteReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState.map((anecdote) => anecdote.content)).toContainEqual(
      action.payload
    );
  });
});

test("returns new state with action anecdotes/vote", () => {
  const state = [
    {
      content: "the app state is in redux store",
      votes: 0,
      id: 1,
    },
    {
      content: "state changes are made with actions",
      votes: 1,
      id: 2,
    },
  ];

  const action = {
    type: "anecdotes/vote",
  };

  deepFreeze(state);
  const newState = anecdoteReducer(state, action);

  expect(newState).toHaveLength(2);

  expect(newState).toContainEqual(state[0]);

  expect(newState).toContainEqual({
    content: "state changes are made with actions",
    votes: 1,
    id: 2,
  });
});
