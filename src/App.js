import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Switch replaced with Routes
import Navbar from './component/Navbar';
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import PrivateRoute from './component/PrivateRoute'; 


function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/students" element={<StudentList />} />
        <Route path="/add-student" element={<StudentForm />} />
        
      
        <Route path="/private" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <StudentList />
          </PrivateRoute>
        } />
        

      </Routes>
    </Router>
  );
}

export default App;
