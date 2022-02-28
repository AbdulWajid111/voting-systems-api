import "./style.css"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ViewTeacher = () => {
    let Nevigate = useNavigate();
    const [addPracticeData, setAddPracticeData] = useState();
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:8080/teacher').then(response => {
            setAddPracticeData(response.data)
            setLoader(false)
        }).catch(error => {
            console.log("error", error)
            setLoader(false)
        })
    }, [])
    const DeleteHandler = (ID) => {
        let remove = addPracticeData?.filter((data) => data.teahcherId !== ID)
        axios.delete('http://localhost:8080/teacher/' + ID).then(response => {
            setAddPracticeData(remove)
        }).catch(error => {
            console.log('error', error)
        })
    }
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
                            <p>View practice</p>
                        </div>
                        {/* button_div */}
                        <div className=" button_div ">
                            <button onClick={() => { Nevigate("/view-practice-record") }}>Create</button>
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
                                        <option>sort by </option>
                                        <option>asending</option>
                                        <option>desending</option>

                                    </select>
                                </div>
                                {/* name_email_input */}
                                <div className="name_email_input">
                                    {/* name_input */}
                                    <div className="name_input">
                                        <input placeholder="search by Name" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className=" tabel_content_main_div">
                        {loader === false ?
                            <table className="table_div">
                                <tr className="heading_row">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PHone NUM</th>
                                    <th>Actions</th>
                                </tr>
                                {addPracticeData.length > 0 ?
                                <React.Fragment>
                                    {addPracticeData?.map((single, index) => (
                                        <tr key={index}>
                                            <td>{single.teacherFullName}</td>
                                            <td>{single.email}</td>
                                            <td>{single.phoneNo}</td>
                                            <button onClick={() => Nevigate("/edit-practice/" + single.teahcherId)} >Edit</button>
                                            <button onClick={() => DeleteHandler(single.teahcherId)} >Delete</button>
                                            <button>View Details</button>

                                        </tr>
                                    ))}
                                </React.Fragment>
                              : 
                              <tr className="text_div"> <td>no-record</td> </tr>
                            }
                            </table>
                            :
                            < div class=" loader_div">
                                <div className="loader"></div>
                            </div>}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ViewTeacher;