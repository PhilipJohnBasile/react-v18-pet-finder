import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const container = document.getElementById("root");
const root = createRoot(container); //

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

root.render(<App tab="home" />);
