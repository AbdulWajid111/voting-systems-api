import "./style.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewTeacher = () => {
    let Nevigate = useNavigate();
    const [loader, setLoader] = useState(true);
    console.log("loader", loader)
    const [usersData, setUsersData] = useState()
    console.log("usersData", usersData)
    const [filterData, setFilterData] = useState();
    console.log("filterData", filterData)
    useEffect(() => {
        axios.get('http://localhost:8080/teacher')
            .then(response => {
                setUsersData(response.data)
                setFilterData(response.data)
                setLoader(false)
            }).catch(error => {
                console.log("error", error)
                setLoader(false)
            })

    }, [])

    const DeleteHandler = (ID) => {
        let remainingRecord = usersData?.filter((teacherRecord) => teacherRecord.teahcherId !== ID)
        axios.delete('http://localhost:8080/teacher/' + ID).then(response => {
            setUsersData(remainingRecord)
        }).catch(error => {
            console.log("error", error)
        })
    }
    const searchRecord = (value) => {
        console.log("method")
        let resultData = filterData ? filterData.filter(single => single.teacherFullName.toLowerCase().indexOf(value.toLowerCase()) !== -1) : []
        setUsersData(resultData)
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
                            <p>View teacher</p>
                        </div>
                        {/* button_div */}
                        <div className=" button_div ">
                            <button onClick={() => { Nevigate("/view-teacher-record") }}>Create</button>
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
                                        <input placeholder="search by Name" onChange={(e) => searchRecord(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    {loader === false ?
                        <div className=" tabel_content_main_div">

                            <table className="table_div">
                                <tr className="heading_row">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PHone NUM</th>
                                    <th>Actions</th>
                                </tr>

                                {usersData.length > 0 ?
                                    <React.Fragment> {usersData?.map((single, index) => (
                                        <tr key={index}>
                                            <td>{single.teacherFullName}</td>
                                            <td>{single.email}</td>
                                            <td>{single.phoneNo}</td>
                                            <button onClick={() => Nevigate("/edit-teacher/" + single.teahcherId)}>Edit</button>
                                            <button onClick={() => DeleteHandler(single.teahcherId)}>Delete</button>
                                            <button>View Details</button>

                                        </tr>
                                    ))}</React.Fragment>

                                    :
                                    <tr className="text_div"> <td>no-record</td> </tr>
                                }
                            </table>
                        </div>

                        :
                        < div class=" loader_div">
                            <div className="loader"></div>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
export default ViewTeacher;