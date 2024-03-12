import React from "react";
import Student from "./Student";

const StudentList = ({ students, removeStudent, editStudent }) => {
  return (
    <div className="table-body">
      <h3 style={{ textAlign: "center", padding: "20px" }}>Students List</h3>
      <table className="table-container">
        <thead className="table-title">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>university</th>
            <th>averageGrade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student
              key={student.id}
              student={student}
              removeStudent={removeStudent}
              editStudent={editStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
