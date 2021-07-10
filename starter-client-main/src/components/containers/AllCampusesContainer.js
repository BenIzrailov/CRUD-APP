import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, addCampusThunk} from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    addCampusThunk: (campus) =>dispatch(addCampusThunk(campus))
  };
};

const AddCampus = () => {
  return (
    <form>
      <div className = 'form-control'>
      <label>Campus Name:</label>
      <input type='text' placeholder='Add Campus'/>
      </div>
      <div className = 'form-control'>
      <label>Description: </label>
      <input type='text' placeholder='Add Campus'/>
      </div>

      <input type='submit' value='Save Campus' />
    </form>
  )
}


// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);