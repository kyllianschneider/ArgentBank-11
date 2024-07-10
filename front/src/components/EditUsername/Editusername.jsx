import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername, userError } from "../../redux/reducer/userSlice";
import "./editUsername.css";

const EditUsername = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, userName, token } = useSelector((state) => state.user);

    const [isEditing, setIsEditing] = useState(false);
    const [editUserName, setEditUserName] = useState(userName);
    const handleClickEdit = () => {
        setIsEditing(true);
    };

    const handleUserNameChange = (event) => {
        setEditUserName(event.target.value);
    };

    const handleClickCancel = () => {
        setIsEditing(false);
    };

    const handleClickSave = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                "http://localhost:3001/api/v1/user/profile",
                { userName: editUserName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            const { data } = response;
            if (response.status === 200) {
                dispatch(updateUsername(editUserName));
                setIsEditing(false);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error updating username:", error);
            dispatch(userError(error.message || "Error updating username"));
        }
    };

    return (
        <>
            {isEditing ? (
                <div className="form-edit">
                    <h2>Edit User Info</h2>
                    <form onSubmit={handleClickSave}>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" value={userName} onChange={handleUserNameChange} />
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" value={firstName} readOnly />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={lastName} readOnly />
                        <div className="buttons-edit">
                            <button className="edit-button" type="submit">
                                Save
                            </button>
                            <button className="edit-button" type="button" onClick={handleClickCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {userName}!
                    </h1>
                    <button className="edit-button" onClick={handleClickEdit}>
                        Edit Name
                    </button>
                </div>
            )}
        </>
    );
};

export default EditUsername;
