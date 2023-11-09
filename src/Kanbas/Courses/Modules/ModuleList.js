import { useParams } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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

                <div className="new-module-wrapper">
                    <li className="list-group-item">
                        <button onClick={handleAddModule}
                            className="new-module-btn btn btn-secondary">
                            Add
                        </button>
                        <button onClick={() => handleUpdateModule()}
                            className="new-module-btn btn btn-secondary">
                            Update
                        </button>

                        <textarea
                            value={module.description}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, description: e.target.value }))
                            }
                            className="form-control new-module-input desc float-end"
                            placeholder="Module description" />
                        <input
                            value={module.name}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, name: e.target.value }))
                            }
                            className="form-control new-module-input float-end"
                            placeholder="Module name" />
                    </li>
                </div>

                <div className="module-list-wrapper">
                    {modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <ul className="list-group modules">
                                <li key={index} className="list-group-item module-items list-group-item-secondary">
                                    <span className="module-name">{module.name}</span>

                                    <button className="float-end edit-module-btns btn btn-secondary"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button className="float-end edit-module-btns btn btn-danger"
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>

                                </li>
                                <li class="list-group-item module-items">
                                    <p className="module-desc">{module.description}</p>
                                </li>
                            </ul>
                        ))}
                </div>
            </div>
        </div>
    );
}
export default ModuleList;