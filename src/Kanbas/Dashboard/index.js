import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
function Dashboard() {
    const courses = db.courses;
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
                <div className="d-flex flex-wrap row">
                    {courses.map((course) => (
                        <div className="card course-card">
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="course-link">
                                <img src="../../images/blue.png" className="card-img-top" alt="..."></img>
                                <div className="card-body desc">
                                    {course.name}
                                    <h6 className="card-text">{course._id} {course.name}</h6>
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