import App from "./app";

import ReactDOM from "react-dom/client";
import "./index.css";

const el = document.querySelector("#root");
if (!el || !!el.innerHTML) {
  throw new Error("Base element does not exist or has contents inside.");
}

ReactDOM.createRoot(el).render(<App />);
