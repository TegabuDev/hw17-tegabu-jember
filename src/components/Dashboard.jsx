import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import data from "../data/students";
import Admin from "./Admin";

const Dashboard = ({ loggedInUser }) => {
  const [students, setStudents] = useState(data);
  const [showAdmin, setShowAdmin] = useState(loggedInUser.isAdmin);

  const addStudent = (name, age, major, university, averageGrade) => {
    const newStudent = {
      id: uuidv4(),
      name,
      age,
      major,
      university,
      averageGrade,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const removeStudent = (studentId) => {
    const updatedStudent = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudent);
  };

  const editStudent = (e) => {
    // const index = students.findIndex(
    //   (user) => (user.username = e.target.value)
    // );
    // students[index].userName = e.target.value;
    // setStudents(students);
  };

  return (
    <div className="dashboard-container">
      {/* <h2>Dashboard</h2> */}
      <AddStudent addStudent={addStudent} />
      <StudentList
        students={students}
        removeStudent={removeStudent}
        editStudent={editStudent}
      />
      {showAdmin && <Admin />}
    </div>
  );
};

export default Dashboard;
