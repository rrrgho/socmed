import React, {FC} from 'react'
import HeaderPage from "../../moleculs/HeaderPage";
import {LayoutType} from "./Layout.type";
import TabMenu from "../../moleculs/TabMenu";
import ProfileSection from "../../organisms/ProfileSection";
import TabContent from "../../moleculs/TabContent";
import MemberSection from "../../organisms/MemberSection";
import FriendSection from "../../organisms/FriendSection";

const Layout: FC<LayoutType> = ({children}) => {
    return (
        <>
            <div className="container-fluid" style={{background: '#FAFAFA'}}>
                <HeaderPage/>
                <TabMenu />
            </div>
            <div className="container-md p-0">
                <ProfileSection />
                <div className="row m-0 p-0 justify-content-between mt-4">
                    <div className="col-12 col-md-8 pe-0 pe-md-4">
                        <TabContent />
                        {children}
                    </div>
                    <div className="col-12 col-md-4 ps-0 ps-md-5">
                        <MemberSection />
                        <FriendSection />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout
