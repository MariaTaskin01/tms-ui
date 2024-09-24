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
          path: "/teacher",
          element: <div>Teacher Details</div>
        },
        {
          path: "/designation",
          element: <div>Designation Details</div>
        },
      ]
    },
  ]);
  
  export default router;