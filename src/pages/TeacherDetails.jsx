/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useTeacherQuery from "../Hooks/useTeacherQuery";
import { Trash, UserPen } from "lucide-react";
import { toast } from "sonner";

const TeacherDetails = () => {
  const {  deleteTeacher, putTeacher, data } = useTeacherQuery(
    "http://localhost:8080/teacher"
  );

  const [showModal, setShowModal] = useState (false)
  const [updateDetail, setUpdateDetail] = useState(null);

  // const handleDelete = (p) => {
  //   deleteTeacher(p);
  // };

  const handleShowModal = (data) => {
    setShowModal(true);
    setUpdateDetail(data);
  };

  const handleUpdate = (p) => {
    p.preventDefault();

    const flag = putTeacher(updateDetail);

    if (flag) {
      toast.success("Successfully Added");
      setShowModal(false);
      setUpdateDetail({
        teacherId: "",
        companyCode: "",
        companyBranchCode: "",
        financeCode: "",
        projectCode: "",
        componentCode: "",
        teacherName: ""
      });
    }
  };

  return (
    <div className="m-2 h-screen  ">
      <div>
        {" "}
        <p className="flex justify-center text-2xl p-4 m-2 text-blue-900 font-bold ">
          Teacher Details{" "}
        </p>
      </div>

      <div className="flex justify-center overflow-x-auto">
        <div>
          <table className="overflow-x-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  SL{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Teacher Id{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Company Code
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Company Branch Code{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Finance Code{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Project Code{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Component Code{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Designation Code{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Teacher Name{" "}
                </th>
                <th className="bg-blue-100 border border-slate-600 px-4 py-2">
                  {" "}
                  Action{" "}
                </th>
              </tr>
            </thead>


            {data?.map((info, index) => (
              <tbody key={index}>
                <td className="border border-slate-600 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.teacherId}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.companyCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.companyBranchCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.financeCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.projectCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.componentCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.designationCode}
                </td>
                <td className="border border-slate-600 px-4 py-2">
                  {info.teacherName}
                </td>

                <td className="flex flex-row">
                  <div className="flex flex-row">
                    <label
                      htmlFor="show_modal"
                      onClick={() => handleShowModal(info)}
                      className="bg-blue-400 py-2 px-4 border rounded shadow p-2 m-2"
                    >
                      <UserPen />
                    </label>

                    <button
                      onClick={() => deleteTeacher(info.teacherId)}
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
                              htmlFor="companyCode"
                            >
                              Company Code
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  companyCode: e.target.value,
                                })
                              }
                              disabled
                              value={updateDetail.companyCode}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Your Company Code"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="companyBranchCode"
                            >
                              Company Branch Code
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  companyBranchCode: e.target.value,
                                })
                              }
                              disabled
                              value={updateDetail.companyBranchCode}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Company Branch Code"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="financeCode"
                            >
                              Finance Code
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  financeCode: e.target.value,
                                })
                              }
                              value={updateDetail.financeCode}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Finance Code"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="projectCode"
                            >
                              Project Code
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  projectCode: e.target.value,
                                })
                              }
                              value={updateDetail.projectCode}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Project Code"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="componentCode"
                            >
                              Component Code
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  componentCode: e.target.value,
                                })
                              }
                              value={updateDetail.componentCode}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Component Code"
                            />

                            <label
                              className="block text-gray-700 font-bold mb-2"
                              htmlFor="teacherName"
                            >
                              Teacher Name
                            </label>
                            <input
                              onChange={(e) =>
                                setUpdateDetail({
                                  ...updateDetail,
                                  teacherName: e.target.value,
                                })
                              }
                              value={updateDetail.teacherName}
                              className="input input-bordered input-primary w-full max-w-xs p-2 m-2"
                              type="text"
                              placeholder="Enter Teacher Name"
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
            ))}
          </table>
            
            <div>
            <button
            className="bg-white hover:bg-gray-100 text-gray-800 justify-end font-semibold py-2 px-4 border border-gray-400 rounded shadow p-2 m-2"
            type="Back"
            onClick={handleUpdate}
            >
            Back
            </button>
            </div>


        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
