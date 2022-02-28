import { useNavigate, useParams } from "react-router-dom";
import "./style.css"
import axios from "axios";
import { useEffect, useState } from "react";
const EditTeacher = () => {
    let Nevigate = useNavigate();
    let params = useParams();
    console.log("params", params)
    const [updateData, setUpdateData] = useState();
    // console.log("updateData", updateData)
    useEffect(() => {
        axios.get('http://localhost:8080/teacher/' + params.id).then(response => {
            setUpdateData(response.data[0])
        }).catch(error => {
            console.log("error", error)
        })
    }, [])

    const UpdateDataHandler = (e) => {
        e.preventDefault();
        console.log("method")
        let payload = {
            teacherFullName: updateData?.teacherFullName,
            email: updateData?.email,
            phoneNo: updateData?.phoneNo,
            password: updateData?.password
        }
        axios.put('http://localhost:8080/teacher/' + params.id, payload).then(response => {
            Nevigate("/view-teacher")
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
                            <p>Edit teacher</p>
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
                        <form onSubmit={(e) => UpdateDataHandler(e)} className="main_form" >
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable"> teacherName* </label><br />
                                <input type="text" placeholder="teacher-name" value={updateData?.teacherFullName} onChange={(e) => {
                                    let duplicate = { ...updateData }
                                    duplicate.teacherFullName = e.target.value
                                    setUpdateData(duplicate)
                                }} required />

                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">email*</label><br />
                                <input type="email" placeholder="email" value={updateData?.email} onChange={(e) => {
                                    let duplicate = { ...updateData }
                                    duplicate.email = e.target.value
                                    setUpdateData(duplicate)
                                }} required/>
                            </div>
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">phoneNo*</label><br />
                                <input type="number" placeholder="phoneNo"  value={updateData?.phoneNo} onChange={(e) => {
                                    let duplicate = { ...updateData }
                                    duplicate.phoneNo = e.target.value
                                    setUpdateData(duplicate)
                                }} required />
                            </div>
                            <div className="name_input_div">
                                <label className="name_lable">Password*</label><br />
                                <input type="password" placeholder="password"  value={updateData?.password} onChange={(e) => {
                                    let duplicate = { ...updateData }
                                    duplicate.password = e.target.value
                                    setUpdateData(duplicate)
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