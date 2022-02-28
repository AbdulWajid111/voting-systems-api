import "./style.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CreateRecord = () => {
    let Nevigate = useNavigate();
    const [addData, setAddData] = useState(
        {
            teacherFullName: "",
            email: "",
            password: "",
            phoneNo: ""
        }
    )

    const AddTeacherRecord = (e) => {
        e.preventDefault()
        let payload = {
            teacherFullName: addData?.teacherFullName,
            email: addData?.email,
            password: addData?.password,
            phoneNo: addData?.phoneNo

        }
        axios.post('http://localhost:8080/teacher', payload).then(resposnse => {
            Nevigate("/view-teacher")
        }).catch(error => error)
    }
    return (
        <div>
            {/* edit_main_div */}
            <div className="edit_main_div">
                {/* edit_content_main_div */}
                <div className=" edit_content_main_div ">
                    {/* header_text_button_div */}
                    <dv className="header_text_button_div">
                        {/* text_div */}
                        <div className="text_div ">
                            <p>View  Teacher record </p>
                        </div>
                        {/* button_div */}
                        <div className=" button_div ">
                            <button>Back</button>
                        </div>
                    </dv>
                    {/* color_div */}
                    <div className="color_div"></div>
                    {/* form_main_div */}
                    <div className="form_main_div">
                        <form onSubmit={(e) => AddTeacherRecord(e)}  className="main_form">
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Name</label><br />
                                <input placeholder="Name" onChange={(e) => {
                                    let duplicate = { ...addData }
                                    duplicate.teacherFullName = e.target.value
                                    setAddData(duplicate)
                                }} />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Email</label><br />
                                <input placeholder="Email" onChange={(e) => {
                                    let duplicate = { ...addData }
                                    duplicate.email = e.target.value
                                    setAddData(duplicate)
                                }} />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">password</label><br />
                                <input placeholder="password" onChange={(e) => {
                                    let duplicate = { ...addData }
                                    duplicate.password = e.target.value
                                }} />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">PhonenuMBER</label><br />
                                <input placeholder="PhonenuMBER " onChange={(e) => {
                                    let duplicate = { ...addData }
                                    duplicate.phoneNo = e.target.value
                                    setAddData(duplicate)
                                }} />
                            </div>
                            {/* button_div */}
                            <div className="button_div">
                                {/* cancel_button */}
                                <div className="cancel_button">
                                    <button onClick={() => { Nevigate("/view-teacher") }}>Cancel</button>
                                </div>
                                {/* update_button */}
                                <div className="update_button">
                                    <button type={"submit"}>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateRecord;