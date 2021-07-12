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
          <img src={campus.imgurl} height = '150' width = '250'/>
          <h2>{campus.address}</h2>
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