import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const store = createStore(counterReducer);

const Statistics = ({ good, ok, bad }) => {
  const all = good + ok + bad;
  if (all === 0) return <p>No feedback given</p>;
  const average = (good - bad) / all; // good=+1, ok=0, bad=-1
  const positive = (good / all) * 100;
  return (
    <table>
      <tbody>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive.toFixed(1)} %</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const { good, ok, bad } = store.getState();
  return (
    <div>
      <h2>Give feedback</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button onClick={() => store.dispatch({ type: "GOOD" })}>good</button>
        <button onClick={() => store.dispatch({ type: "OK" })}>ok</button>
        <button onClick={() => store.dispatch({ type: "BAD" })}>bad</button>
        <button onClick={() => store.dispatch({ type: "RESET" })}>reset</button>
      </div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>{ok}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
        </tbody>
      </table>
      <Statistics good={good} ok={ok} bad={bad} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);

export default App;
