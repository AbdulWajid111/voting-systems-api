import "./style.css"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const EditTeacher = () => {
    let Nevigate = useNavigate();
    let params = useParams();
    const [editPractice, setEditPractice] = useState();
    useEffect(() => {
        axios.get('http://localhost:8080/teacher/' + params.id).then(response => {
            setEditPractice(response.data[0])
        }).catch(error => {
            console.log("error", error)
        })
    }, [])
    const UpdatePracticeHandler = (e) => {
        e.preventDefault();
        console.log("method")
        let payload = {
            teacherFullName: editPractice?.teacherFullName,
            email: editPractice?.email,
            phoneNo: editPractice?.phoneNo,
            password: editPractice?.password
        }
        axios.put('http://localhost:8080/teacher/' + params.id, payload).then(response => {
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
                    <div className="header_text_button_div">
                        {/* text_div */}
                        <div className="text_div ">
                            <p>Edit Pracice</p>
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
                        <form onSubmit={(e) => UpdatePracticeHandler(e)} className="main_form" >
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable"> teacherName* </label><br />
                                <input type="text" placeholder="teacher-name" value={editPractice?.teacherFullName} onChange={(e) => {
                                    let duplicate = { ...editPractice }
                                    duplicate.teacherFullName = e.target.value
                                    setEditPractice(duplicate)
                                }} required />

                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">email*</label><br />
                                <input type="email" placeholder="email" value={editPractice?.email} onChange={(e) => {
                                    let duplicate = { ...editPractice }
                                    duplicate.email = e.target.value
                                    setEditPractice(duplicate)
                                }} required />
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">phoneNo*</label><br />
                                <input type="number" placeholder="phoneNo" value={editPractice?.phoneNo} onChange={(e) => {
                                    let duplicate = { ...editPractice }
                                    duplicate.phoneNo = e.target.value
                                    setEditPractice(duplicate)
                                }} required />
                            </div>
                            <div className="name_input_div">
                                <label className="name_lable">Password*</label><br />
                                <input type="password" placeholder="password" value={editPractice?.password}
                                    onChange={(e) => {
                                        let duplicate = { ...editPractice }
                                        duplicate.password = e.target.value
                                        setEditPractice(duplicate)
                                    }} required />
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
export default EditTeacher;