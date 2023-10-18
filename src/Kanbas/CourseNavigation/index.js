import { Link, useParams, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video",
        "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="col-xs-3 list-group" style={{ width: 150 }}>
            <ul class="list-group course-navigation">
                {links.map((link, index) => (
                    <li className="course-navigation-li">
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`list-group-item course-navigation ${pathname.includes(link) && "active"}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;