import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css"
import { useState } from "react";
const EditStudent = () => {
    let params = useParams();
    const [updateStudentRecord, setUpdateStudentRecord] = useState()
    axios.get('http://localhost:8080/student/' + params.id).then(response => {
        setUpdateStudentRecord(response.data[0])
    }).catch(error => {
        console.log("error", error)
    })
    const UpdateStudentRecordHandler=()=>{
axios.put()
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
                            <p>Edit User</p>
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
                        <form  onSubmit={(e)=>UpdateStudentRecordHandler(e)}  className="main_form">
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Name</label><br />
                                <input placeholder="Name" value={updateStudentRecord?.studentFullName} onChange={(e) => {
                                    let duplicate = { ...updateStudentRecord }
                                    duplicate.studentFullName = e.target.value
                                    setUpdateStudentRecord(duplicate)
                                }} />
                            </div>
                            <div className="name_input_div">
                                <label className="name_lable">email</label><br />
                                <input placeholder="emmail" value={updateStudentRecord?.email} value={updateStudentRecord?.studentFullName} onChange={(e) => {
                                    let duplicate = { ...updateStudentRecord }
                                    duplicate.email = e.target.value
                                    setUpdateStudentRecord(duplicate)
                                }} />
                            </div>
                            <div className="name_input_div">
                                <label className="name_lable">phoneNo</label><br />
                                <input placeholder="phoneNo" value={updateStudentRecord?.phoneNo}
                                    value={updateStudentRecord?.studentFullName} onChange={(e) => {
                                        let duplicate = { ...updateStudentRecord }
                                        duplicate.phoneNo = e.target.value
                                        setUpdateStudentRecord(duplicate)
                                    }} />
                            </div>
                            <div className="name_input_div">
                                <label className="name_lable">password</label><br />
                                <input placeholder="password" value={updateStudentRecord?.password} value={updateStudentRecord?.studentFullName} onChange={(e) => {
                                    let duplicate = { ...updateStudentRecord }
                                    duplicate.password = e.target.value
                                    setUpdateStudentRecord(duplicate)
                                }} />
                            </div>
                            {/* button_div */}
                            <div className="button_div">
                                {/* cancel_button */}
                                <div className="cancel_button">
                                    <button>Cancel</button>
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
export default EditStudent;