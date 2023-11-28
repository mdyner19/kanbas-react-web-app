import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   //const URL = "https://kanbas-node-server-app-mdyner-150e557f92ff.herokuapp.com/api/courses";
   const API_BASE = process.env.REACT_APP_API_BASE;
   //const API_BASE = "https://kanbas-node-server-app-mdyner-150e557f92ff.herokuapp.com/api";
   const URL = `${API_BASE}/courses`;
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);

   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
         response.data,
         ...courses,
      ]);
      setCourse({ name: "" });
   };

   const deleteCourse = async (course) => {
      const response = await axios.delete(
         `${URL}/${course._id}`
      );
      setCourses(courses.filter(
         (c) => c._id !== course._id));
   };

   const updateCourse = async (course) => {
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
      );
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return response.data;
            }
            return c;
         })
      );
      setCourse({ name: "" });
   };

   return (
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation />
            <Routes>
               <Route path="/" element={<Navigate to="/Kanbas/signin" />} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/Account" element={<Account />} />
               <Route path="/Account/:id" element={<Account />} />
               <Route path="/admin/users" element={<UserTable />} />
               <Route path="Dashboard" element={
                  <Dashboard
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />
               } />
               <Route path="Courses/:courseId/*" element={
                  <Courses courses={courses} />} />
            </Routes>
         </div>
      </Provider>
   );
}
export default Kanbas;