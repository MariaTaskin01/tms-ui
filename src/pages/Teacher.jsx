/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTeacherQuery from "../Hooks/useTeacherQuery";

const Teacher = () => {
  const { postTeacher } = useTeacherQuery("http://localhost:8080/teacher");

  const [id, setId] = useState("");
  const [company, setCompany] = useState("");
  const [bCode, setBCode] = useState("");
  const [fCode, setFCode] = useState("");
  const [pCode, setPCode] = useState("");
  const [cCode, setCCode] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const teacherInfo = {
      teacherId: id,
      companyCode: company,
      companyBranchCode: bCode,
      financeCode: fCode,
      projectCode: pCode,
      componentCode: cCode,
      designationCode: designation,
      teacherName: name,
    };
    setId("");
    setCompany("");
    setBCode("");
    setFCode("");
    setPCode("");
    setCCode("");
    setDesignation("");
    setName("");

    // console.log("Teacher Details",teacherInfo);

    postTeacher(teacherInfo);
  };

  const handleSee = () => {
    navigate("/TeacherDetails");
  };

  return (
    <div className=" h-screen flex  align-items justify-center  bg-slate-50">
      <div>
        <div className="grid grid-cols-4 gap-x-6 font-normal m-4 ">
          <label className="font-semibold m-6"> Enter Teacher ID</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border m-3 w-full p-2  rounded-md "
            type="text"
            placeholder="Enter Teacher ID"
            required
          ></input>
          <label className="font-semibold m-6"> Teacher Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border  m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Teacher Name"
          ></input>
          <label className="font-semibold m-6">Company Code</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border m-2  w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Company Code"
          ></input>

          <label className="font-semibold m-6">Company Branch Code</label>
          <input
            value={bCode}
            onChange={(e) => setBCode(e.target.value)}
            className="border  m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Company Branch Code"
          ></input>

          <label className="font-semibold m-6">Finance Code </label>
          <input
            value={fCode}
            onChange={(e) => setFCode(e.target.value)}
            className="border  m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Finance Code"
          ></input>

          <label className="font-semibold m-6">Project Code</label>
          <input
            value={pCode}
            onChange={(e) => setPCode(e.target.value)}
            className="border m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Project Code"
          ></input>

          <label className="font-semibold m-6">Component Code</label>
          <input
            value={cCode}
            onChange={(e) => setCCode(e.target.value)}
            className="border m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Component Code"
          ></input>

          <label className="font-semibold m-6">Designation</label>
          {/* <input
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="border  m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Designation"
          ></input> */}
          <select className="select select-primary border m-2 w-full p-2  rounded-md">
            <option disabled selected>
              {" "}
              Select Designation Code{" "}
            </option>
          </select>

          <div className="col-span-4 flex justify-center mt-4 gap-6 ">
            <button
              onClick={handleSubmit}
              className="border-2 px-4 py-2 rounded-lg  bg-blue-900 text-white"
              type="button"
            >
              Submit
            </button>
            <button
              onClick={handleSee}
              className="border-2 px-4 py-2 rounded-lg  bg-pink-900 text-white"
              type="button"
            >
              See Details
            </button>
          </div>
      </div>
    </div>
    </div>
  );
  
};

export default Teacher;
