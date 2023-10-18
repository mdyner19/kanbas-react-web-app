import db from "../../Database";
import { useParams } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="col">
      <div className="row">
        <span>
          <div className="float-end top-grades-btns">
            <button type="button" className="btn btn-secondary top-btns">
              <i className="fas fa-file-import"></i>
              Import</button>
            <button type="button" class="btn btn-secondary top-btns">
              <i className="fas fa-file-export"></i>
              Export</button>
            <button type="button" className="btn btn-secondary top-btns">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </span>
      </div>

      <div className="row">
        <div className="col">
          <span className="bold-text">
            Student Names
          </span>
          <input placeholder="Search Students" className="form-control" />
        </div>
        <div className="col">
          <span className="bold-text">
            Assignment Names
          </span>
          <input placeholder="Search Assignments" className="form-control" />
        </div>
      </div>


      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-secondary top-btns float-start filter-btn">
            <i className="fas fa-filter"></i>
            Apply Filters
          </button>
        </div>
      </div>

      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-active">
                <th scope="col">Student Name</th>
                {assignments.map((assignment) => (<th scope="col">{assignment.title}</th>))}
              </tr>
            </thead>

            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <th scope="row">
                      <span className="student-name">
                        {user.firstName} {user.lastName}
                      </span>
                    </th>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      return (<td className="grade-input">{grade?.grade || ""}</td>);
                    })}
                  </tr>);
              })}
            </tbody></table>
        </div>
      </div >
    </div>);
}
export default Grades;