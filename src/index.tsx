import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "pages/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Routes />);
