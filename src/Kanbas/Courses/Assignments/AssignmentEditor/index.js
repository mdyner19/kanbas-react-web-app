import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
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
                    <input value={assignment.title} className="form-control assignment-info-fields" />
                    <textarea name="biography-info" rows="5" cols="40" className="form-control assignment-info-fields"></textarea>
                </div>
                <div class="row footer">
                    <hr />
                    <div className="bottom-btns">
                        <form action="index.html">
                            <button onClick={handleSave} className="btn btn-danger bottom-btn float-end">
                                Save
                            </button>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn btn-secondary bottom-btn float-end">
                                Cancel
                            </Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;