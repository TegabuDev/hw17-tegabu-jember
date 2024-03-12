import React from 'react'
import Button from './Button';

const Student = ({student,removeStudent,editStudent}) => {
  return (
    <tr >
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.major}</td>
        <td>{student.university}</td>
        <td>{student.averageGrade}</td>
        <td className='td-action'>
          <p><Button onClick={()=>removeStudent(student.id)} className="btn-danger" content="Remove" /></p>
          <p><Button onClick={()=>editStudent(student.id)} className="btn-edit" content="Edit" /></p>
        </td>
      </tr>
  )
}

export default Student