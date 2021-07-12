import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"

const AllStudentsView = (props) => {
  const {students,deleteStudent} = props;

  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`student/new`}>
          <button>Add New Student</button>
        </Link>
      </div>
      );
  }

  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <h2>{name}@{student.campus.name}.com</h2>
          <h3>GPA:3.5</h3>
          <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => deleteStudent(student.id)}>Delete</FaTimes>
          <Link to={`/editstudent`}>
          <button>Edit</button>
          </Link>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};
export default AllStudentsView;