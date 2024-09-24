import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeStudent, updateStudent } from '../redux/studentsSlice';
import '../component/Css/StudentDetails.css'; 

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState(student);

  const handleDelete = () => {
    dispatch(removeStudent(student.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateStudent(editedStudent));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  return (
    <div className="student-details">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedStudent.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={editedStudent.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete Student</button>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
