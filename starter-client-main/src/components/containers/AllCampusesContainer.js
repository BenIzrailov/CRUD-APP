import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, 
  deleteCampusThunk,
  editCampusThunk
} from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
      <AllCampusesView
        campuses={this.props.allCampuses}
        deleteCampus ={this.props.deleteCampus}
        editCampus = {this.props.editCampus}
      />
      </div>
    )
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
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  };
};
export default connect(mapState, mapDispatch)(AllCampusesContainer);