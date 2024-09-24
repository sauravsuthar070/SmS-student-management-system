import React from 'react';
import { Navigate } from 'react-router-dom'; // Redirect replaced with Navigate

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoute;
