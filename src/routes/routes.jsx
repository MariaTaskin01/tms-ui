import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Designation from "../pages/Designation";
import Teacher from "../pages/Teacher";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children: [
        {
          index : true,
          element: <Dashboard></Dashboard>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "/designation",
          element: <Designation></Designation>
          // element: <div>Desig</div>
        },
        {
          path: "/teacher",
          element: <Teacher></Teacher>
        },
      ]
    },
  ]);
  
  export default router;