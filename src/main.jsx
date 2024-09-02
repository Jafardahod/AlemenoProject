import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { fetchData } from './features/dataSlice';
import { fetchStudents } from './features/studentSlice';
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import CourseDetails from "./screens/CourseDetails.jsx";
store.dispatch(fetchData());
store.dispatch(fetchStudents());

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
