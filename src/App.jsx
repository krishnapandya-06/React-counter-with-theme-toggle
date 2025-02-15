import { Provider } from "react-redux";
import store from "./store/store.js";
import { ThemeProvider } from "./components/ThemeContext";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="container">
          <h1 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
            React Counter with Redux & Hooks
          </h1>
          <ThemeToggle />
          <Counter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

