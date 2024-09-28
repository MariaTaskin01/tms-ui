/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useDesignationQuery from '../Hooks/useDesignationQuery';
import { Trash, UserPen } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const DesignationDetails = () => {
const {data, deleteDesignation, putDesignation} = useDesignationQuery("http://localhost:8080/designation");

const [showModal, setShowModal] = useState (false)
const [updateDetail, setUpdateDetail] = useState(null);
const navigate = useNavigate();

const handleShowModal = (data) => {
  setShowModal(true);
  setUpdateDetail(data);
};

const handleUpdate = (p) => {
  p.preventDefault();

  const flag = putDesignation(updateDetail);

  if (flag) {
    toast.success("Successfully Added");
    setShowModal(false);
    setUpdateDetail({
      desigCode: "",
      desigDesc: "",
      insUser: "",
    });
  }
};

const seeDashboard = () => {
  navigate("/Dashboard");
};

    return (
        <div className="m-2 min-h-screen ">
        <div>
          {" "}
          <p className="flex justify-center text-2xl p-4 m-2 text-blue-900 font-extrabold ">
            Designation Details{" "}
          </p>
        </div>
  
        <div className="m-2 flex justify-center"> 
          <div>
          <table className="border-collapse border border-slate-500">
            <thead>
              <tr>
              <th className="bg-blue-100 border border-slate-600 px-4 py-2"> SL </th>
              <th className="bg-blue-100 border border-slate-600 px-4 py-2"> Designation Code </th>
              <th className="bg-blue-100 border border-slate-600 px-4 py-2"> Designation Description</th>
              <th className="bg-blue-100 border border-slate-600 px-4 py-2"> Insert User</th>
             
              <th className="bg-blue-100 border border-slate-600 px-4 py-2">  Action </th>
              </tr>
             
            </thead>
            {
              data.map((item,index)=>(
                <tbody key={index}>
                  <td className="border border-slate-600 px-4 py-2">{index+1}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.desigCode}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.desigDesc}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.insUser}</td>

                  <td className="flex flex-row">
                  <div className="flex flex-row">
                    <label
                      htmlFor="show_modal"
                      onClick={() => handleShowModal(item)}
                      className="bg-blue-400 py-2 px-4 border rounded shadow p-2 m-2"
                    >
                      <UserPen />
                    </label>

                    <button
                      onClick={() => deleteDesignation(item.desigCode)}
                      className="bg-red-500 py-2 px-4 border rounded shadow p-2 m-2"
                    >
                      <Trash />
                    </button>
                  </div>

                  {showModal ? (
                    <div>
                      <input
                        type="checkbox"
                        id="show_modal"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                  
                  {/* ------------------------------- */}

                          <div className="p-6 flex-col justify-center">

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="desigDesc"
                            >
                              Designation Description
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  desigDesc: e.target.value,
                                })
                              }
                              value={updateDetail.desigDesc}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Your Designation Description"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="insUser"
                            >
                              User Description
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  insUser: e.target.value,
                                })
                              }
                              value={updateDetail.insUser}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter User Description"
                            />

                            <div className="p-6 flex-row justify-center">
                              <label
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow p-2 m-2"
                                type="submit"
                                onClick={handleUpdate}
                              >
                                Submit
                              </label>

                              <label
                                htmlFor="show_modal"
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow p-2 m-2"
                              >
                                Close
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  </td>
                </tbody>
              ))
            }
            
          </table>
          <div>
            <button onClick={seeDashboard}
            className="bg-white hover:bg-gray-100 text-gray-800 justify-end font-semibold py-2 px-4 border border-gray-400 rounded shadow p-2 m-2"
            type="Back"
            >
            Back
            </button>
            </div>

          </div>
        </div>
      </div>
    );
};

export default DesignationDetails;