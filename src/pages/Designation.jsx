/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useDesignationQuery from '../Hooks/useDesignationQuery';
import { useNavigate } from 'react-router-dom';

const Designation = () => {

    const { postDesignation } = useDesignationQuery("http://localhost:8080/designation")

    const [desigCode, setDesigCode] = useState("");
    const [desigDesc, setDesigDesc] = useState("");
    const [insUser, setInsUser] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const designation = {
            desigCode: desigCode,
            desigDesc: desigDesc,
            insUser: insUser,
        };

        setDesigCode("");
        setDesigDesc("");
        setInsUser("");

        postDesignation(designation);
    };

    const handleSee = () => {
        navigate("/DesignationDetails");
    };

    return (
        <div className=" h-screen flex  align-items justify-center  bg-slate-50"> 
            <div>
                <div className="grid grid-cols-4 gap-x-6 font-normal m-6"> 
                    <label className="m-4 font-semibold">Designation Code</label>
                    <input
                    value = {desigCode}
                    onChange={(e) => setDesigCode(e.target.value)}
                    className="border m-2 w-full p-2  rounded-md "
                    type="text"
                    placeholder="Enter Designation Code"
                    required
                    ></input>

                    <label className="m-4 font-semibold">Designation Description</label>
                    <input
                    value = {desigDesc}
                    onChange={(e) => setDesigDesc(e.target.value)}
                    className="border m-2 w-full p-2  rounded-md "
                    type="text"
                    placeholder="Enter Designation Description"
                    required
                    ></input>

                    <label className="m-4 font-semibold">User Designation</label>
                    <input
                    value = {insUser}
                    onChange={(e) => setInsUser(e.target.value)}
                    className="border m-2 w-full p-2  rounded-md "
                    type="text"
                    placeholder="Enter User Description"
                    required
                    ></input>

                    <div className="col-span-3 flex justify-end mt-4 gap-4 ">
                    <button
                        onClick={handleSubmit}
                        className="border-3 px-4 py-2 rounded-lg  bg-blue-900 text-white"
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

export default Designation;