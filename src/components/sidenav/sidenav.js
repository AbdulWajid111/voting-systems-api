import "./style.css"
import ISC from "../../assets/images/ISC.svg"
import { useLocation, useNavigate } from "react-router-dom"
const SideNav = () => {
    let Nevigate = useNavigate();
    let location = useLocation();
    console.log("location", location)
    return (
        <div>
            {/* main_container_side_nav */}
            <div className="main_container_side_nav ">
                {/* main_content_side_nav */}
                <div className="main_content_side_nav">
                    {/* image_div */}
                    <div className=" image_div ">
                        <img src={ISC} alt="" />

                    </div>
                    {/* main_lists_div */}
                    <div className="main_lists_div ">
                        {/* main_ul */}
                        <ul className="main_ul">
                            <li className={`${location.pathname === "/view-teacher" || location.pathname === "/edit-teacher" || location.pathname === "/add-teacher" || location.pathname === "/add-teacher-record" || location.pathname === "/view-teacher-record" ? "active_teacher" : " teacher"}`} onClick={() => { Nevigate("/view-teacher") }}>Teacher</li>
                            <li className={`${location.pathname === "/view-student" || location.pathname === "/edit-student" || location.pathname === "/add-student" || location.pathname === "/add-student-record" || location.pathname === "/view-student-record" ? "active_student" : "student"}`} onClick={() => { Nevigate("/view-student") }}>Student</li>
                            <li className={`${location.pathname === "/view-parents" || location.pathname === "/edit-parents" || location.pathname === "/add-parents" ? "active_teacher" : "student"}`} onClick={() => { Nevigate("/view-parents") }}>Parents</li>
                            <li onClick={() => { Nevigate("/view-practice") }}>Practice</li>
                            <li onClick={() => { Nevigate("/view-practice-student") }}>PracticeStudent</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideNav;