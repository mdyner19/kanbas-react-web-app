import { React } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

    return (
        <div className="dashboard-wrapper">
            <h2>Dashboard</h2>
            <hr />
            <div className="cards-wrapper col">
                <div className="published-courses-label row">
                    <label for="published-courses-label">
                        Published Courses (3)
                    </label>
                    <hr />
                </div>
                <div className="new-course-wrapper">
                    <div className="new-course-form">
                        <input value={course.name} className="form-control new-course-input"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <input value={course.number} className="form-control new-course-input"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        <input value={course.startDate} className="form-control new-course-input" type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        <input value={course.endDate} className="form-control new-course-input" type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    </div>
                    <div className="new-course-btns-wrapper">
                        <button onClick={addNewCourse} className="btn btn-secondary float-end new-course-btn">
                            Add
                        </button>
                        <button onClick={updateCourse} className="btn btn-secondary float-end new-course-btn">
                            Update
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-wrap row">
                    {courses.map((course) => (
                        <div className="card course-card">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="course-link">
                                <img src="../../images/blue.png" className="card-img-top" alt="..."></img>
                                <div className="card-body desc">
                                    {course.name}
                                    <h6 className="card-text">{course.number} {course.name}</h6>
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="edit-course-btn btn btn-secondary">
                                        Edit
                                    </button>
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                        className="edit-course-btn btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;