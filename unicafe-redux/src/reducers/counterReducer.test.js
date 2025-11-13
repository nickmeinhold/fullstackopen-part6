import deepFreeze from "deep-freeze";
import { describe, expect, test } from "vitest";
import counterReducer from "./counterReducer";

describe("unicafe reducer", () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test("should return a proper initial state when called with undefined state", () => {
    const action = {
      type: "DO_NOTHING",
    };

    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("good is incremented", () => {
    const action = {
      type: "GOOD",
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });

  test("ok is incremented", () => {
    const action = { type: "OK" };
    const state = initialState;
    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
  });

  test("bad is incremented", () => {
    const action = { type: "BAD" };
    const state = initialState;
    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });

  test("reset brings all to zero from non-zero state", () => {
    const state = { good: 2, ok: 3, bad: 1 };
    deepFreeze(state);
    const newState = counterReducer(state, { type: "RESET" });
    expect(newState).toEqual(initialState);
  });

  test("unknown action returns same state object reference", () => {
    const state = { good: 1, ok: 1, bad: 1 };
    deepFreeze(state);
    const newState = counterReducer(state, { type: "SOMETHING_ELSE" });
    expect(newState).toBe(state); // unchanged reference since immutable
    expect(newState).toEqual(state);
  });
});
