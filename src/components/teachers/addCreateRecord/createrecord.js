import "./style.css"
import { useNavigate } from "react-router-dom";
const CreateRecord = () => {
    let Nevigate = useNavigate();
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
                            <p>Add Teacher Record </p>
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
                        <from className="main_form">
                            {/* name_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">Name</label><br />
                                <input placeholder="Name" />
                            </div>
                            {/* status_input_div*/}
                            <div className="name_input_div">
                                <label className="name_lable">status</label><br />
                                <select className="select_option">
                                    <option>Enable</option>
                                    <option>Disable</option>
                                </select>
                            </div>
                            {/* check_box_div */}
                            <div className="check_box_div">
                                <label>update password</label><br />
                                <input type={"checkbox"} />
                            </div>
                            {/* button_div */}
                            <div className="button_div">
                                {/* cancel_button */}
                                <div className="cancel_button">
                                    <button onClick={() => { Nevigate("/add-teacher") }}>Cancel</button>
                                </div>
                                {/* update_button */}
                                <div className="update_button">
                                    <button>Update</button>
                                </div>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateRecord;