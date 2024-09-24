import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children: [
        {
          path: "/home",
          element: <div>Home</div>
        },
        {
          path: "/about",
          element: <div></div>
        },
      ]
    },
  ]);
  
  export default router;