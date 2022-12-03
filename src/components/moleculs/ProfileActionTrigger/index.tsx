import React, {useState} from 'react'
import ThemeButton from "../../atoms/ThemeButton";

const ProfileActionTrigger = () => {
    const [follow, setFollow] = useState<boolean>(false);
    return (
        <div className="row pt-3">
            <div className="col-4 p-1">
                <ThemeButton hero={"danger"} text={"h3"}>Chat</ThemeButton>
            </div>
            <div className="col-4 p-1">
                <ThemeButton hero={"danger"} text={"h3"}>Meet</ThemeButton>
            </div>
            <div className="col-4 p-1">
                <ThemeButton onClick={() => follow ? setFollow(false) : setFollow(true)} hero={follow ? "danger_selected" : "danger_light"} text={"h3"}>{follow ? "Followed" : "Follow"}</ThemeButton>
            </div>
        </div>
    )
}
export default ProfileActionTrigger
