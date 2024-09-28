/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import DesignationDetails from "./DesignationDetails";
import useDesignationQuery from "../Hooks/useDesignationQuery";


const Designation = () => {
  const {desigList} = useDesignationQuery("http://localhost:8080/designation")
  const [toggle, setToggle] = useState(false);
  const [details, setdetails] = useState([]);
  const [id, setId] = useState("");
  const [desc, setdesc] = useState("");
  const [ins, setins] = useState("");
  const [upd, setupd] = useState("");
  const [index, setIndex] = useState(null);
  useEffect(() => {}, [details]);

  return (
    <div className="h-screen max-w-7xl px-4 mx-auto">
      <h1>Designation Details</h1>

    </div>
  );
};

export default Designation;
