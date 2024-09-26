/* eslint-disable no-unused-vars */
import React from "react";
import useTeacherQuery from "../Hooks/useTeacherQuery";

const TeacherDetails = () => {
  const { PostTeacher, data } = useTeacherQuery(
    "http://localhost:8080/teacher"
  );

  return (
    <div className="m-2 h-screen  ">
      <div>
        {" "}
        <p className="flex justify-center font-serif text-2xl p-4 m-2 text-blue-900 font-extrabold ">
          Teacher Details{" "}
        </p>
      </div>

      <div className="m-2 flex justify center"> 
        <div>
        <table className="font-serif  border-collapse border border-slate-500">
          <thead>
            <tr>
            <th className="border border-slate-600 px-4 py-2"> SL </th>
            <th className="border border-slate-600 px-4 py-2"> Teacher Id </th>
            <th className="border border-slate-600 px-4 py-2"> Company Code</th>
            <th className="border border-slate-600 px-4 py-2"> Company Branch Code </th>
            <th className="border border-slate-600 px-4 py-2"> Finance Code </th>
            <th className="border border-slate-600 px-4 py-2"> Project Code </th>
            <th className="border border-slate-600 px-4 py-2"> Component Code </th>
            <th className="border border-slate-600 px-4 py-2"> Designation Code </th>
            <th className="border border-slate-600 px-4 py-2"> Teacher Name </th>
            <th className="border border-slate-600 px-4 py-2">  Action </th>
            </tr>
           
          </thead>
          <tbody>
            {data?.map((info, index) => (
              <tr key={index}>
                <td className="border border-slate-600 px-4 py-2">{index + 1}</td>
                <td className="border border-slate-600 px-4 py-2">{info.teacherId}</td>
                <td className="border border-slate-600 px-4 py-2">{info.companyCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.companyBranchCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.financeCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.projectCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.componentCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.designationCode}</td>
                <td className="border border-slate-600 px-4 py-2">{info.teacherName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
