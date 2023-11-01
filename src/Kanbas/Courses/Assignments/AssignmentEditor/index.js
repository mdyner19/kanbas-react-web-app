import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    updateAssignment,
    selectAssignment,
} from "../assignmentReducer";

function AssignmentEditor() {
    const navigate = useNavigate()
    const assignment = useSelector((state) => state.assignmentReducer.assignment);
    const dispatch = useDispatch();
    const { courseId } = useParams();

    return (
        <div className="col">
            <div className="assignment-editor-page-sub-header">
                <div className="float-end top">
                    <span className="published">
                        <i className="fas fa-check-circle"></i>
                        Published
                    </span>
                    <button type="button" className="btn btn-secondary top-btns">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <hr className="assignment-editor-hr"></hr>

            <div className="main-assignment-content">
                <div className="row">
                    <span className="assignment-name">
                        Assignment Name
                    </span>
                    <input
                        value={assignment.title}
                        onChange={(e) =>
                            dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                        className="form-control assignment-info-fields"
                        placeholder="Assignment Title" />
                    <textarea
                        value={assignment.description}
                        onChange={(e) =>
                            dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
                        className="form-control assignment-info-fields"
                        placeholder="Assignment description" />

                    <div className="row input-fields">
                        <div className="col input-name">
                            <span className="input-field-name">
                                <span className="float-end">Points
                                </span>
                            </span>
                        </div>
                        <div className="col input-field">
                            <input
                                value={assignment.points}
                                onChange={(e) =>
                                    dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
                                className="form-control assignment-info-fields-lower"
                                placeholder="Points"
                                type="number" />
                        </div>
                    </div>

                    <div className="row input-fields">
                        <div className="col input-name">
                            <span className="input-field-name">
                                <span className="float-end">Assign
                                </span>
                            </span>
                        </div>
                        <div className="col input-field">
                            <div className="assignment-input-box">
                                <div className="assignment-inputs-boxed">
                                    <span className="boxed-headers">
                                        <label for="boxed-headers">
                                            Due
                                        </label>
                                    </span>
                                    <input
                                        value={assignment.dueDate}
                                        onChange={(e) =>
                                            dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                                        className="form-control assign-inputs-boxed"
                                        placeholder="2023-12-06" 
                                        type="date"/>
                                </div>
                                <div className="assignment-inputs-boxed row">
                                    <div className="col assign-input">
                                        <div className="assign-input-half">
                                            <span className="boxed-headers">
                                                <label for="boxed-headers">
                                                    Available from
                                                </label>
                                            </span>
                                            <input
                                                value={assignment.availableFromDate}
                                                onChange={(e) =>
                                                    dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                                                className="form-control assign-inputs-boxed-half"
                                                placeholder="2023-12-06" 
                                                type="date"/>
                                        </div>
                                    </div>
                                    <div className="col assign-input">
                                        <div className="assign-input-half">
                                            <span className="boxed-headers">
                                                <label for="boxed-headers">
                                                    Until
                                                </label>
                                            </span>
                                            <input
                                                value={assignment.availableUntilDate}
                                                onChange={(e) =>
                                                    dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                                className="form-control assign-inputs-boxed-half"
                                                placeholder="2023-12-06" 
                                                type="date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row footer">
                    <hr />
                    <div className="bottom-btns">
                        <form action="index.html">
                            <button onClick={() => {
                                if (assignment._id) {
                                    // If assignment exists, update it
                                    dispatch(updateAssignment(assignment));
                                } else {
                                    // If assignment doesn't exist, create it
                                    dispatch(addAssignment({ ...assignment, course: courseId }));
                                }
                                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                            }}
                                className="btn btn-danger bottom-btn float-end">
                                Save
                            </button>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn btn-secondary bottom-btn float-end"
                                // Clear assignment selection
                                onClick={() => { dispatch(selectAssignment({})); }}>
                                Cancel
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
}


export default AssignmentEditor;