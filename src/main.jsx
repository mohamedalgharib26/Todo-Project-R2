import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import TodosList from "./components/TodosList.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Profile from "./components/Profile.jsx";
import UserData from "./components/UserData.jsx";
import AboutLayout from "./Layouts/aboutLayout.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/signUp.jsx";
import SingleTodo from "./components/SingleTodo.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="/todos" element={<TodosList />}></Route>
        <Route path="/todos/:id" element={<SingleTodo />} />
        {/* Parent Route  */}
        <Route path="/about" element={<AboutLayout />}>
          {/* Nested Routes  */}
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} /> {/*/about/profile*/}
          <Route path="user/:id" element={<UserData />} /> {/*/about/user*/}
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="**" element={<h1>404 Page Not Found</h1>} />
        </Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>

    <Toaster />
  </>
);
