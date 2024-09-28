/* eslint-disable no-unused-vars */
import React from 'react';
import useDesignationQuery from '../Hooks/useDesignationQuery';

const DesignationDetails = () => {

const {data} = useDesignationQuery("http://localhost:8080/designation");


    return (
        <div className="m-2 min-h-screen ">
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
              <th className="border border-slate-600 px-4 py-2"> Insert User</th>
             
              <th className="border border-slate-600 px-4 py-2">  Action </th>
              </tr>
             
            </thead>
            {
              data.map((item,index)=>(
                <tbody key={index}>
                  <td className="border border-slate-600 px-4 py-2">{index+1}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.desigCode}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.desigDesc}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.insUser}</td>

                </tbody>
              ))
            }
            
          </table>
          </div>
        </div>
      </div>
    );
};

export default DesignationDetails;