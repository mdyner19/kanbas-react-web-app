import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  selectAssignment,
} from "./assignmentReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add a function to navigate to the assignment editor page
  const navigateToAssignmentEditor = (assignmentId) => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignmentId}`);
  };

  return (
    <div className="assignment-page-wrapper">
      <div className="assignment-page-sub-header">
        <div className="float-start top-btns">
          <input id="search-input" placeholder="Search for Assignment" className="form-control" />
        </div>
        <div className="top-btns">
          <div className="float-end">
            <button type="button" className="btn btn-secondary top-btns">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>

            <button
              onClick={() => {
                // Create a new assignment
                const newAssignment = { title: "New Assignment", description: "", points: "100", dueDate:"2023-12-06", availableFromDate: "2023-09-06", availableUntilDate: "2023-12-06" };
                dispatch(selectAssignment(newAssignment));
                navigateToAssignmentEditor();
              }}
              className="btn btn-danger top-btns">
              Create Assignment</button>
            <button type="button" className="btn btn-secondary top-btns">
              <i className="fa fa-plus" aria-hidden="true"></i>
              Group</button>
          </div>
        </div>
      </div>
      <hr className="assignment-hr" />

      <ul className="list-group assignments">

        <li className="list-group-item assignment-items-header list-group-item-secondary">
          <i className="fas fa-grip-vertical"></i>
          <span className="assignment-type-header">
            <label for="assignment-type-header">
              Assignments
            </label>
          </span>
          <div className="assignment-header float-end">
            <i className="fa module-icons fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </li>
        {assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment, index) => (
            <li className="list-group-item assignment-items">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="assignment-link"
                onClick={() => {
                  dispatch(selectAssignment(assignment));
                }}>
                <div className="col icons">
                  <div className="assignment-icons">
                    <i className="fas module-icons fa-grip-vertical"></i>
                    &emsp;
                    <i className="far fa-file-alt green"></i>
                  </div>
                </div>
                <div className="assignment-desc col">
                  <div className="assignment-title-desc">
                    <div className="assignment-title">
                      <label for="assignment-title">{assignment.title}</label>
                    </div>
                    <div className="assignment-desc-display">
                      <label for="assignment-desc-display">— {assignment.description}</label>
                    </div>
                  </div>
                  <div class="assignment-description">
                    <span className="bold">Due</span>&nbsp;
                    {assignment.dueDate}&nbsp;|&nbsp;<span className="bold">Available from</span>&nbsp;
                    {assignment.availableFromDate}&nbsp;<span className="bold">until</span>&nbsp;
                    {assignment.availableUntilDate}&nbsp;|&nbsp;
                    <label for="assignment-description">{assignment.points} pts</label>
                  </div>
                </div>
              </Link>
              <button
                className="btn edit-assignment-btns btn-danger"
                onClick={() => dispatch(deleteAssignment(assignment._id))}>
                Delete</button>
              <div className="col icons">
                <div className="assignment-icons">

                  <i className="fa fa-check-circle green" aria-hidden="true"></i>
                  &emsp;
                  <i className="fa module-icons fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div >
  );
}
export default Assignments;