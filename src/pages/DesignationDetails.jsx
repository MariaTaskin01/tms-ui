/* eslint-disable no-unused-vars */
import React from "react";
import { toast } from "sonner";

const DesignationDetails = (props) => {
    const{details, handleDelete, handleEdit} = props;

  return (
    <div>
      <DesignationDetails className="min-w-full divide-y divide-gray-200">
        <thead>
          <th className="px-6 py-3 text-start uppercase">Desig-Id</th>
          <th className="px-6 py-3 text-start uppercase">Desig-Desc</th>
          <th className="px-6 py-3 text-start uppercase">Ins-User</th>
          <th className="px-6 py-3 text-start uppercase">Upd-User</th>
        </thead>

        {details?.map((item, index) => {
          return (
            <tbody>
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">{item.desigId}</td>
              <td className="px-6 py-4 text-center">{item.desigDesc}</td>
              <td className="px-6 py-4 text-center">{item.insUser}</td>
              <td className="px-6 py-4 text-center">{item.updUser}</td>

              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 rounded-md p-2 m-2 text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 rounded-md p-2 m-2 text-white"
                >
                  Edit
                </button>
              </td>
            </tbody>
          );
        })}
      </DesignationDetails>
    </div>
  );
};

export default DesignationDetails;
