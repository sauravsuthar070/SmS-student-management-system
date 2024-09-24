import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Student Management</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/add-student">Add Student</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
