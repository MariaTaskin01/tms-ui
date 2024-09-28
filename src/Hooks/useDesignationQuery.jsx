/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const useDesignationQuery = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     axios
  //     .get("http://localhost:8080/designation")
  //     .then(function(response) {
  //         setData(response.data);
  //     })
  //     .catch(function (error) {
  //         console.log(error);

  //     })
  //     .finally(function () {
  //     });

  // }, [url]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log("Designation", data);
      })
      .catch((err) => console.log(err));
  }, [url, data]);

  // ------------------------>

  const postDesignation = (payload) => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200 && response.ok && response.data) {
          setData([...data, payload]);
          toast.success("Designation added Successfully", { duration: 2000 });
          const newData = [...data, payload];
          setData(newData);
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) => console.log(response))
      .finally(setIsLoading(false));

    return true;
  };

  // ------------------------>

  const deleteDesignation = (id) => {
    const urlpath = url + "/" + id;
    fetch(urlpath, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);

        if (response.status == 200 && response.ok) {
          const newdesignationDetail = data.filter(
            (item) => item.id !== id
          );
          setData(newdesignationDetail);
          toast.success("Designation deleted Successfully", { duration: 2000 });
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) => console.log(response))
    //   .finally(setIsLoading(false));

    // return true;
  };

  // ------------------------>

  const putDesignation = (payload) => {
    const urlpath = url + "/" + payload.desigCode;
    fetch(urlpath, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log(response);

        if (response.status == 200 && response.ok) {
          const updatedDesignationDetail = data.map((item) =>
            item.desigCode === payload.desigCode ? payload : item
          );
          setData(updatedDesignationDetail);
          toast.success("Designation updated Successfully", { duration: 2000 });
        } else {
          toast.error("Action Failed");
        }
      })
      .catch((response) => console.log(response))
      .finally(setIsLoading(false));

    return true;
  };

  return { data, deleteDesignation, postDesignation, putDesignation };
};

export default useDesignationQuery;
