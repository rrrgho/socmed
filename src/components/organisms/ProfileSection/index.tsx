import React from 'react'
import ProfileActionTrigger from "../../moleculs/ProfileActionTrigger";
import ProfileInfo from "../../moleculs/ProfileBio";

const ProfileSection = () => {
    return(
        <div className="bg-white p-4 rounded-bottom border border-top-0" style={{overflow:'hidden'}}>
            <ProfileInfo />
            <ProfileActionTrigger />
        </div>
    )
}
export default ProfileSection
