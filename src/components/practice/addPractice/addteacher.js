import "./style.css"
import { useNavigate } from "react-router-dom";
const AddTeacher = () => {
    let Nevigate = useNavigate();
    return (
        <div>
            {/* add_teacher_main_div */}
            <div className="add_teacher_main_div">
                {/* edit_content_main_div */}
                <div className=" edit_content_main_div ">
                    {/* header_text_button_div */}
                    <dv className="header_text_button_div">
                        {/* text_div */}
                        <div className="text_div ">
                            <p>Add Practice</p>
                        </div>
                        {/* button_div */}
                        <div className=" button_div ">
                            <button onClick={()=>{
                                Nevigate("/add-teacher-record")
                            }}>Create</button>
                        </div>
                    </dv>
                    {/* color_div */}
                    <div className="color_div"></div>
                    {/* users_record_mai_div */}
                    <div className="users_record_mai_div">
                        {/* users_record_color_div */}
                        <div className=" users_record_color_div">
                            {/* form_div */}
                            <form className="form_div">
                                {/* record_heading */}
                                <div className="record_heading">
                                    <h4>All Users Record</h4>
                                </div>
                                {/* select_option_div */}
                                <div className=" select_option_div ">
                                    {/* select_user_status */}
                                    <select className="select_user_status">
                                        <option>Select user status</option>
                                    </select>
                                    {/* select_Affilation_status */}
                                    <select className="select_Affilation_status">
                                        <option>Select Affilation status</option>
                                    </select>
                                </div>
                                {/* name_email_input */}
                                <div className="name_email_input">
                                    {/* name_input */}
                                    <div className="name_input">
                                        <input placeholder="Name" />
                                    </div>
                                    {/* Email_input */}
                                    <div className="email_input">
                                        <input placeholder="Email" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* tabel_content_main_div */}
                    <div className=" tabel_content_main_div">
                        {/* table_div */}
                        <table className="table_div">
                            <tr className="heading_row">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Status Affilated</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>Abdul</td>
                                <td>Abdul@</td>
                                <td>Enable</td>
                                <td>Normal user</td>
                                <button>Edit</button>
                                <button>Delete</button>
                                <button>View Details</button>

                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTeacher;