import React, {useState} from 'react'
import ThemeTypography from "../../atoms/ThemeTypography";
import Tab from "../../atoms/Tab";

const TabMenu = () => {
    const [tabActive, setTabActive] = useState<string>("EXPLORE")
    return (
        <div className="d-none d-md-block bg-white border-bottom">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-2 text-center">
                        <Tab onClick={() => {setTabActive('HOME')}} active={tabActive === 'HOME'}>Home</Tab>
                    </div>
                    <div className="col-2 text-center">
                        <Tab onClick={() => {setTabActive('EXPLORE')}} active={tabActive === 'EXPLORE'}>Explore</Tab>
                    </div>
                    <div className="col-2 text-center">
                        <Tab onClick={() => {setTabActive('FEED')}} active={tabActive === 'FEED'}>Feed</Tab>
                    </div>
                    <div className="col-2 text-center">
                        <Tab onClick={() => {setTabActive('SCHEDULED')}} active={tabActive === 'SCHEDULED'}>Scheduled</Tab>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabMenu
