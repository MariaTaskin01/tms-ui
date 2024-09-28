/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Designation = () => {

    const[code, setCode] = useState ();
    const[description, setDescription] = useState ();

   const handleDesignationSee = () =>{
    
   }
   const handleDesignationSubmit = () =>{

   }

    return (
        <div className=" h-screen flex  align-items justify-center  bg-cyan-50">
      <div>
        <div className="grid grid-cols-4 gap-x-6 font-serif m-4 ">
          <label className="m-2"> Enter Designation Code </label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border m-2 w-full p-2  rounded-md "
            type="text"
            placeholder="Enter Designation Code "
            required
          ></input>
          <label className="m-2"> Enter Designation Description</label>
          <input
            value={name}
            onChange={(e) => setDescription(e.target.value)}
            className="border  m-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Enter Designation Description"
          ></input>
          

          

          <div className="col-span-4 flex justify-center mt-4 gap-6 ">
            <button
              onClick={handleDesignationSubmit}
              className="border-2 px-4 py-2 rounded-lg  bg-blue-900 text-white"
              type="button"
            >
              Submit
            </button>
            <button
              onClick={handleDesignationSee}
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

export default Designation;