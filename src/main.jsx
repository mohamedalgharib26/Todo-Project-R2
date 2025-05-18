import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import TodosList from "./components/TodosList.jsx";
import About from "./components/About.jsx";
import CountactUs from "./components/CountactUs.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/todos" element={<TodosList />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<CountactUs />}></Route>
      </Routes>
    </BrowserRouter>

    <Toaster />
  </>
);
