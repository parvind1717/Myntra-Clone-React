import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/bag.jsx";
import Home from "./routes/Home.jsx";
import myntraStore from "./Store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, lodder: postLoder */ },
      { path: "/bag", element: <Bag /> },
      /*action: createPostAction,*/
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
