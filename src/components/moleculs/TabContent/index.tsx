import React, {useEffect, useState} from 'react'
import Tab from "../../atoms/Tab";
import {Link, useLocation, useRoutes} from "react-router-dom";

const TabContent = () => {
    const location = useLocation()
    const [tabActive, setTabActive] = useState<string>(location.pathname === '/' ? 'HOME' : 'EXPLORE')
    return (
        <div className="row bg-transparent border-bottom">
            <div className="container-md">
                <div className="row justify-content-center">
                    <div className="col-4 p-0 text-center">
                        {/*<Tab onClick={() => {*/}
                        {/*    setTabActive('HOME')*/}
                        {/*}} active={tabActive === 'HOME'}>Main</Tab>*/}
                        <Link to={"/"} onClick={() => {
                            setTabActive('HOME')
                        }}>
                            <Tab active={tabActive === 'HOME'}>
                                Main
                            </Tab>
                        </Link>
                    </div>
                    <div className="col-4 p-0 text-center">
                        <Link to={"/about"} onClick={() => {
                            setTabActive('EXPLORE')
                        }}>
                            <Tab active={tabActive === 'EXPLORE'}>
                                About
                            </Tab>
                        </Link>
                    </div>
                    <div className="col-4 p-0 text-center">
                        <Tab onClick={() => {
                            setTabActive('FEED')
                        }} active={tabActive === 'FEED'}>Posts</Tab>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TabContent
