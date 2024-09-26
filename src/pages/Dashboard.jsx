/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen max-w-4xl px-4 mx-6 flex space-x-5 p-6 m-2"> 

      <div className="card glass w-1/2 h-64">
        <div className="card-body">
          <h2 className="card-title">Total No of Teachers</h2>
          <div className="countdown font-mono text-6xl">
            <span style={{ "--value": counter }}></span>
          </div>
          <p>Teachers are enrolled</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">See Details</button>
            <button className="btn btn-warning">Add new</button>
          </div>
        </div>
      </div>
  

      <div className="card glass w-1/2 h-64">
        <div className="card-body">
          <h2 className="card-title">Total No of Designation</h2> {/* Different title for the second card */}
          <div className="countdown font-mono text-6xl">
            <span style={{ "--value": counter }}></span>
          </div>
          <p>Designation Listed</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">See Details</button>
            <button className="btn btn-warning">Add new</button>
          </div>
        </div>
      </div>
    </div>
  );
  

};

export default Dashboard;
