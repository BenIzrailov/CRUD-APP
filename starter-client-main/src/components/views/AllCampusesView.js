import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"

const AllCampusesView = (props) => {
  const {campuses,deleteCampus,editCampus} = props;

  if (!campuses.length) {
    return( 
    <div>
      <p>There are no campuses.</p>
      <Link to={`campus/new`}>
          <button>Add New Campus</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      {campuses.map((campus) => {
        return (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="campus" width="100" height="100"/>
          <h2>Address: 695 Park Ave, New York, NY 10065</h2>
          <p>{campus.description}</p>
          <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => deleteCampus(campus.id)}>Delete</FaTimes>
          <Link to={`/editcampus`}>
          <button>Edit</button>
          </Link>
        </div>
  );
}
)}
<Link to={`/newcampus`}>
  <button>Add New Campus</button>
</Link>
</div>
);
};

export default AllCampusesView; 