import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import ModuleList from '../Modules/ModuleList';
import { Link } from "react-router-dom";

function Home() {
  const rightBtns = ["Import Existing Content", "Import From Commons", "Choose Home Page", "View Course Stream",
    "New Announcements", "New Analytics", "View Course Notifications"];
  const lectureDates = ["Sep 7 at 11:45am", "Sep 11 at 11:45am", "Sep 11 at 6:00pm"];
  return (
    <div className="col home-wrapper">
      <div className="main-content col-lg">
        <ModuleList />
      </div>
      <div className="col-xs-3 right-btns">
        <div className="row course-status">
          <label for="course-status">
            Course Status
          </label>
        </div>
        <div class="row right-top-btns">
          <button type="button" class="btn right-btns btn-secondary">
            <i class="far fa-times-circle"></i>
            Unpublish</button>
          <button type="button" class="btn right-btns btn-success">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
            Published</button>
        </div>
        <div className="row right-btns float-end">
          {rightBtns.map((btn) => (
            <button type="button" className="btn right-mid-btns btn-secondary">{btn}</button>
          ))}
        </div>
        <div className="row to-do">
          <span className="right-headers">
            <label for="right-headers">
              To Do
            </label>
          </span>
          <hr className="right-hrs" />
          <div className="right-links">
            <i className="fas fa-exclamation-circle icon-todo"></i>
            <Link className="right-module-links">Grade A1</Link>
            <span className="right-link-content">
              <label for="right-link-content">Sep 18 at 11:59pm</label>
            </span>
          </div>
        </div>
        <div className="row coming-up">
          <span className="right-headers">
            <label for="right-headers">
              Coming Up
            </label>
          </span>
          <hr className="right-hrs" />
          {lectureDates.map((date) => (
            <div className="right-links">
              <i className="far fa-calendar icon-cal" ></i>
              <Link className="right-module-links">Lecture</Link><br />
              <span className="right-link-content">
                <label for="right-link-content">{date}</label>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;