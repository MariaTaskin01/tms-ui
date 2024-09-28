/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const useTeacherQuery = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/teacher")
  //     .then(function (response) {
  //       console.log(response);
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [url]);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((err) => console.log(err));
}, [url]);

  // ------------------------>

  const postTeacher = (add) => {
    console.log(add);

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(add),
    // })

    axios
      .post(url, add)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          setData([...data, add]);
          toast.success("Teacher Added Successfully", { duration: 2000 });
          const newData = [...data, add];
          setData(newData);
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) => console.log(response))
      .finally(() => setIsLoading(false));

    return true;
  };

  // ------------------------>

  const deleteTeacher = (id) => {
    const urlpath = url + "/" + id;
    fetch(urlpath, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200 && response.ok) {
          const newTeacherDetail = data.filter((item) => item.teacherId !== id);
          setData(newTeacherDetail);
          toast.success("Teacher deleted Successfully", { duration: 2000 });
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) => console.log(response));
    // .finally(setIsLoading(false));
  };

  // ------------------------>

  const putTeacher = (add) => {
    const urlpath = url + "/" + add.teacherId;
    console.log("id", add);

    fetch(urlpath, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((response) => {
        console.log(response);

        if (response.status == 200 && response.ok) {
          const updatedTeacherDetail = data.map((item) =>
            item.teacherId === add.teacherId ? add : item
          );
          setData(updatedTeacherDetail);
          toast.success("Teacher updated Successfully", { duration: 2000 });
          return true;
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) =>
        toast.error("Something went wrong", { duration: 2000 })
      )
      .finally(setIsLoading(false));

    return false;
  };

  return { data, postTeacher, deleteTeacher, putTeacher };
};

export default useTeacherQuery;
