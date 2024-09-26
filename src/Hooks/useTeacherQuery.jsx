/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const useTeacherQuery = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/teacher")
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [url]);

  const postTeacher = (add) => {
    console.log(add);
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(add),
    })
    
    // axios.post(url, add)
    .then((response) => {
      console.log(response);
      
      if (response.status == 200 && response.ok && response.data) {
        setData([...data, add]);
        toast.success("Teacher Added Successfully", { duration: 2000 });
      } else {
        toast.error("Action Failed");
      }
    });
  };
  return { data, postTeacher };
};

export default useTeacherQuery;
