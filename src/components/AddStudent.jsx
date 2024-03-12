import React, { useState } from 'react'
import Button from './Button';

const initialState={
  name:"",
  age:"",
  major:"",
  university:"",
  averageGrade:""
}
const AddStudent = ({addStudent}) => {
  const [newStudent,setNewStudent]=useState(initialState);

  const handleAddStudent=(e)=>{
    e.preventDefault()
    const { name,age,major,university, averageGrade } = newStudent
    if (!name || !age || !major || !university || !averageGrade) return
    addStudent(name, age,major,university,averageGrade)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewStudent({...newStudent, [name]: value })
  }
  
  return (
    <div className='addStudent-container'>
      <h3>Add student</h3>
      <form action="" onSubmit={handleAddStudent}>
        <div className='form-container'>
          <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input type="text" placeholder='name' name="name" id="name" value={newStudent.name} onChange={handleChange} />
          </div>
          <div>
          {/* <label htmlFor="age">Age:</label> */}
          <input type="number" placeholder='age' name="age" id="age" value={newStudent.age}  onChange={handleChange}/>
          </div>
          <div>
          {/* <label htmlFor="major">Major:</label> */}
          <input type="text" name="major" id="major" placeholder='major' value={newStudent.major}  onChange={handleChange}/>
          </div>
          <div>
            {/* <label htmlFor="university">University:</label> */}
            <input type="text" name="university" placeholder='university' id="university" value={newStudent.university}  onChange={handleChange}/>
          </div>
          <div>
            {/* <label htmlFor="averageGrade">Average Grade:</label> */}
            <input type="number" name="averageGrade" id="averageGrade" placeholder='average grade' value={newStudent.averageGrade}  onChange={handleChange}/>
          </div>
          <div>
            <Button className="btn-danger" content="Add" />
          {/* <button type='submit'>Add</button> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddStudent;