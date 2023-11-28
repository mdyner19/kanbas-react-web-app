import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import Home from "./Home"
import Modules from "./Modules"
import Assignments from "./Assignments"
import Grades from "./Grades"
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const pathList = pathname.split("/")
    const [course, setCourse] = useState({});
    //const URL = "https://kanbas-node-server-app-mdyner-150e557f92ff.herokuapp.com/api/courses";
    const API_BASE = process.env.REACT_APP_API_BASE;
    //const API_BASE = "https://kanbas-node-server-app-mdyner-150e557f92ff.herokuapp.com/api";
    const URL = `${API_BASE}/courses`;

    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div className="dashboard-wrapper col">
            <div className="course-page-header row">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <i className="fas fa-bars top-left fa-2x"></i>
                        <li className="breadcrumb-item course-page-name">
                            <label for="course-page-name">{course.number}</label>
                        </li>
                        <li className="breadcrumb-item active course-page-name" aria-current="page">{pathList[4]}</li>
                    </ol>
                </nav>
            </div>
            <hr className="course-name-hr" />

            <div className="row course-navigation-wrapper">
                <CourseNavigation />
                <div className="col">
                    <div
                        className="bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />} />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;