import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Teacher from "../pages/Teacher";
import TeacherDetails from "../pages/TeacherDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children: [
        {
          path: "/teacher",
          element: <Teacher></Teacher>
        },
        {
          path: "/designation",
          element: <div>Designation Details</div>
        },
        {
          path: "/TeacherDetails",
          element: <TeacherDetails></TeacherDetails>
        },
      ]
    },
  ]);
  
  export default router;