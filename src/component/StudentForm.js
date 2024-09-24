import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentsSlice';
import './Css/StudentForm.css'; // Ensure to create a separate CSS file for styling

const StudentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rollNumber && className) {
      const newStudent = {
        id: Date.now(), // Use a unique ID
        name,
        rollNumber,
        class: className,
      };
      dispatch(addStudent(newStudent));
      setName('');
      setRollNumber('');
      setClassName('');
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter student name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rollNumber">Roll Number</label>
        <input
          type="text"
          id="rollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
          placeholder="Enter roll number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <input
          type="text"
          id="class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
          placeholder="Enter class"
        />
      </div>
      <button type="submit" className="submit-button">Add Student</button>
    </form>
  );
};

export default StudentForm;
