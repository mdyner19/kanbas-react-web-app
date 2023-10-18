import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="col module-wrapper">
            <div className="top-btns">
                <button type="button" className="btn btn-secondary top-btns">Collapse All</button>
                <button type="button" className="btn btn-secondary top-btns">View Progress</button>
                <select class="form-control top-btns">
                    <option>✔ Publish All</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <button type="button" className="btn btn-danger top-btns">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    Module</button>
                <button type="button" className="btn btn-secondary top-btns">
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
            </div>
            <hr className="top-btns-hr" />
            <div className="module-list">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul className="list-group modules">
                                <li key={index} className="list-group-item module-items list-group-item-secondary">
                                    <span className="module-name">{module.name}</span>
                                </li>
                                <li class="list-group-item module-items">
                                    <p className="module-desc">{module.description}</p>
                                </li>
                            </ul>
                        ))
                }
            </div>
        </div>
    );
}
export default ModuleList;