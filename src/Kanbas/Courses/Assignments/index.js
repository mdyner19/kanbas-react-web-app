import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="assignment-page-wrapper">
      <div className="assignment-page-sub-header">
        <div className="float-start top-btns">
          <input id="search-input" placeholder="Search for Assignment" class="form-control" />
        </div>
        <div className="top-btns">
          <div className="float-end">
            <button type="button" class="btn btn-secondary top-btns">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-danger top-btns">
              <i className="fa fa-plus" aria-hidden="true"></i>
              Assignment</button>
            <button type="button" class="btn btn-secondary top-btns">
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

        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="assignment-link">
            <li className="list-group-item assignment-items">
              <div className="col icons">

                <div className="assignment-icons">
                  <i className="fas module-icons fa-grip-vertical"></i>
                  &emsp;
                  <i className="far fa-file-alt green"></i>
                </div>
              </div>

              <div className="assignment-desc col">
                <div className="assignment-title col">
                  <label for="assignment-title">{assignment.title}</label>
                </div>
                <div class="assignment-description">
                  <label for="assignment-description">100 pts</label>
                </div>
              </div>

              <div className="col icons">
                <div className="assignment-icons">
                  <i className="fa fa-check-circle green" aria-hidden="true"></i>
                  &emsp;
                  <i className="fa module-icons fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div >
  );
}
export default Assignments;