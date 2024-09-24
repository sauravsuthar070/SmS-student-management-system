import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../redux/studentsSlice';
import StudentDetails from './StudentDetails';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div>
      <h2>Students List</h2>
      {students.map((student) => (
        <StudentDetails key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
