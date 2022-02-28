import "./style.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const CreateRecord = () => {
    let Nevigate = useNavigate();
    const [addPracticeData, setAddPracticeData] = useState(
        {
            teacherFullName: "",
            email: "",
            password: "",
            phoneNo: ""
        }
    )
    const AddPractice = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/teacher', addPracticeData).then(response => {
            Nevigate("/view-practice")
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
                        <form onSubmit={(e) => AddPractice(e)} className="main_form">
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Name</label><br />
                                <input  type="text" placeholder="Name" onChange={(e) => {
                                    let duplicate = { ...addPracticeData }
                                    duplicate.teacherFullName = e.target.value
                                    setAddPracticeData(duplicate)
                                }} required />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label  type="text" className="name_lable">Email</label><br />
                                <input placeholder="Email" onChange={(e) => {
                                    let duplicate = { ...addPracticeData }
                                    duplicate.email = e.target.value
                                    setAddPracticeData(duplicate)
                                }} required />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">password</label><br />
                                <input  type="password" placeholder="password" onChange={(e) => {
                                    let duplicate = { ...addPracticeData }
                                    duplicate.password = e.target.value
                                    setAddPracticeData(duplicate)
                                }} required />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">PhonenuMBER</label><br />
                                <input type="number" placeholder="PhonenuMBER " onChange={(e) => {
                                    let duplicate = { ...addPracticeData }
                                    duplicate.phoneNo = e.target.value
                                    setAddPracticeData(duplicate)
                                }} required />
                            </div>
                            {/* button_div */}
                            <div className="button_div">
                                {/* cancel_button */}
                                <div className="cancel_button">
                                    <button onClick={() => { Nevigate("/view-practice") }}>Cancel</button>
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