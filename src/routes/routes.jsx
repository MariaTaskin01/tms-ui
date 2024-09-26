import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Teacher from "../pages/Teacher";
import TeacherDetails from "../pages/TeacherDetails";
import Dashboard from "../pages/Dashboard";
import Designation from "../pages/Designation";
import Teacher from "../pages/Teacher";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children: [
        {
          path: "/teacher",
          element: <Teacher></Teacher>
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
        },
        {
          path: "/teacher",
          element: <Teacher></Teacher>
        },
        {
          path: "/TeacherDetails",
          element: <TeacherDetails></TeacherDetails>
        },
      ]
    },
  ]);
  
  export default router;