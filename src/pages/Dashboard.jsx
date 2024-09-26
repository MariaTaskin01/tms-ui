/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [designationCount, setDesignationCount] = useState(0);

  const navigate = useNavigate();

  const seeDesignation = () => {};
  const seeTeacher = () => {
    navigate("/TeacherDetails");
  };
  const addDesignation = () => {};
  const addTeacher = () => {
    navigate("/Teacher");
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const teacherResponse = await axios.get(
          "http://localhost:8080/teacher"
        );
        console.log(teacherResponse.data);

        setTeacherCount(teacherResponse.data.length);

        const designationResponse = await axios.get(
          "http://localhost:8080/designation"
        );
        setDesignationCount(designationResponse.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="h-screen max-w-8xl mx-auto flex justify-center space-x-5 p-6">
      <div className="w-1/2 p-2">
        <div className="relative w-full h-70 rounded-lg overflow-hidden">
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/19/57/55/1000_F_419575573_E8YdABOVANVO3hglaQ0DHOh1gPunT99Y.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-slate-800 to-transparent opacity-80"></div>
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Total No of Teachers</h2>
            <div className="countdown font-mono text-6xl">
              <span style={{ "--value": teacherCount }}></span>
            </div>
            <p>Teachers enrolled</p>
            <div className="card-actions justify-end">
              <button onClick={seeTeacher} className="btn btn-accent m-2">
                See Details
              </button>
              <button onClick={addTeacher} className="btn btn-warning m-2">
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-2">
        <div className="relative w-full h-70 rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1410731649/photo/a-female-college-student-writing-her-homework-on-a-school-notebook-close-up-and-focus-hand.jpg?s=612x612&w=0&k=20&c=sdw9YxnuxuY__VP0Jta0tn8umi57hLgLj5uF5bkmZAY="
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-950 to-transparent opacity-80"></div>
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Total No of Designation</h2>
            <div className="countdown font-mono text-6xl">
              <span style={{ "--value": designationCount }}></span>
            </div>
            <p>Designation Listed</p>
            <div className="card-actions justify-end">
              <button onClick={seeDesignation} className="btn btn-accent m-2">
                See Details
              </button>
              <button onClick={addDesignation} className="btn btn-warning m-2">
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
