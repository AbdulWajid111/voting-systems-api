import "./style.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const CreateRecord = () => {
    let Nevigate = useNavigate();
    const [addStudentRecord, setAddStudentRecord] = useState(
        {
            studentFullName: "",
            email: "",
            phoneNo: ""
        }
    );
    const AddStudentDataHandler = (e) => {
        e.preventDefault();
        let payload = {
            studentFullName: addStudentRecord?.studentFullName,
            email: addStudentRecord?.email,
            phoneNo: addStudentRecord?.phoneNo,
            parentId: 4,
        }
        console.log("payload", payload)
        axios.post("http://localhost:8080/student", payload).then(response => {
            Nevigate("/view-student")
        }).catch(error => {
            console.log("error", error)
        })
    }
    return (
        <div>
            {/* edit_main_div */}
            <div className="edit_main_div">
                {/* edit_content_main_div */}
                <div className=" edit_content_main_div ">
                    {/* header_text_button_div */}
                    <div className="header_text_button_div">
                        {/* text_div */}
                        <div className="text_div ">
                            <p>view student Record </p>
                        </div>
                        {/* button_div */}
                        <div className=" button_div ">
                            <button>Back</button>
                        </div>
                    </div>
                    {/* color_div */}
                    <div className="color_div"></div>
                    {/* form_main_div */}
                    <div className="form_main_div">
                        <form onSubmit={(e) => AddStudentDataHandler(e)} className="main_form">
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Name</label><br />
                                <input placeholder="Name" onChange={(e) => {
                                    let duplicate = { ...addStudentRecord }
                                    duplicate.studentFullName = e.target.value
                                    setAddStudentRecord(duplicate);
                                }} />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">email</label><br />
                                <input placeholder="email" onChange={(e) => {
                                    let duplicate = { ...addStudentRecord }
                                    duplicate.email = e.target.value
                                    setAddStudentRecord(duplicate);
                                }} />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">phone no</label><br />
                                <input placeholder="phone no" onChange={(e) => {
                                    let duplicate = { ...addStudentRecord }
                                    duplicate.phoneNo = e.target.value
                                    setAddStudentRecord(duplicate);
                                }} />
                            </div>
                            {/* button_div */}
                            <div className="button_div">
                                {/* cancel_button */}
                                <div className="cancel_button">
                                    <button onClick={() => { Nevigate("/view-student") }}>Cancel</button>
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