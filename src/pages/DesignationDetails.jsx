/* eslint-disable no-unused-vars */
import React from 'react';

const DesignationDetails = () => {

    return (
        <div className="m-2 h-screen ">
        <div>
          {" "}
          <p className="flex justify-center font-serif text-2xl p-4 m-2 text-blue-900 font-extrabold ">
            Designation Details{" "}
          </p>
        </div>
  
        <div className="m-2 flex justify-center"> 
          <div>
          <table className="font-serif  border-collapse border border-slate-500">
            <thead>
              <tr>
              <th className="border border-slate-600 px-4 py-2"> SL </th>
              <th className="border border-slate-600 px-4 py-2"> Designation Code </th>
              <th className="border border-slate-600 px-4 py-2"> Designation Description</th>
             
              <th className="border border-slate-600 px-4 py-2">  Action </th>
              </tr>
             
            </thead>
            <tbody>
             
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
};

export default DesignationDetails;