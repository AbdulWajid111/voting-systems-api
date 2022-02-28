import { Routes, Route } from "react-router-dom";
import SideNav from "./components/sidenav/sidenav";
import AddStudent from "./components/students/addstudent/addstudent";
import AddTeacher from "./components/teachers/addTeacher/addteacher";
import EditTeacher from "./components/teachers/editTeacher/editteacher";
import ViewTeacher from "./components/teachers/viewTeacher/viewteacher";
import EditStudent from "./components/students/editstudent/editstudent";
import ViewStudent from "./components/students/viewstudent/viewstudent";
import AddCreateTeacherRecord from "./components/teachers/addCreateRecord/createrecord";
import ViewCreateTeacherRecord from "./components/teachers/viewCreateRecord/createrecord";
import AddCreateStudentRecord from "./components/students/addCreateStudentCreateRecord/createrecord";
import AddPractice from "./components/practice/addPractice/addteacher";
import EditPractice from "./components/practice/editPractice/editteacher";
import ViewPractice from "./components/practice/viewPractice/viewteacher";
import EditCreatePractice from "./components/practice/addCreateRecord/createrecord";
import EditViewPractice from "./components/practice/viewCreateRecord/createrecord";
import AddPracticeStudent from "./components/studentPractice/addstudent/addstudent";
import EditPracticeStudent from "./components/studentPractice/editstudent/editstudent";
import ViewPracticeStudent from "./components/studentPractice/viewstudent/viewstudent";
import EditCreatePracticeStudent from "./components/studentPractice/addCreateStudentCreateRecord/createrecord";
import EditViewPracticeStudent from "./components/studentPractice/ViewCreateStudentCreateRecord/createrecord";
import AddParents from "./components/parents/addparents/addparents"
import ViewParents from "./components/parents/viewparents/viewparents"
import EditParents from "./components/parents/editparents/editparents"
const RoutsPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "20%" }}>
                <SideNav />
            </div>
            <div style={{ width: "80%", }}>
                <Routes>
                    <Route element={<AddParents />} path={"/add-parents"} />
                    <Route element={<ViewParents/>} path={"/view-parents"} />
                    <Route element={<EditParents/>} path={"/edit-parents"} />
                    <Route element={<AddTeacher />} path={"/add-teacher"} />
                    <Route element={<EditTeacher />} path={"/edit-teacher/:id"} />
                    <Route element={<ViewTeacher />} path={"/view-teacher"} />
                    <Route element={<AddCreateTeacherRecord />} path={"/add-teacher-record"} />
                    <Route element={<ViewCreateTeacherRecord />} path={"/view-teacher-record"} />
                    <Route element={<AddStudent />} path={"/add-student"} />
                    <Route element={<EditStudent />} path={"/edit-student/:id"} />
                    <Route element={<ViewStudent />} path={"/view-student"} />
                    <Route element={<AddCreateStudentRecord />} path={"/add-student-record"} />
                    <Route element={<AddPractice />} path={"/add-practice"} /> 
                    <Route element={<EditPractice />} path={"/edit-practice/:id"} />
                    <Route element={<ViewPractice />} path={"/view-practice"} />
                    <Route element={<EditCreatePractice />} path={"/create-practice-record"} />
                    <Route element={<EditViewPractice />} path={"/view-practice-record"} />
                    <Route element={<AddPracticeStudent />} path={"/add-practice-student"} />
                    <Route element={<EditPracticeStudent />} path={"/edit-practice-student"} />
                    <Route element={<ViewPracticeStudent />} path={"/view-practice-student"} />
                    <Route element={<EditCreatePracticeStudent />} path={"/create-practice-record-student"} />
                    <Route element={<EditViewPracticeStudent />} path={"/view-practice-record-student"} />
                </Routes>
            </div>
        </div>
    )
}
export default RoutsPage;