import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>Current Theme: {theme}</h2>
      <button className="btn-secondary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

