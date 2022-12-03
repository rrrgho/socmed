import React, {FC} from 'react'
import MemberData from "../../../data/member.example";
import MemberCard from "../../moleculs/MemberCard";
import ThemeButton from "../../atoms/ThemeButton";
import SectionTitle from "../../atoms/SectionTitle";

const MemberSection: FC = () => {
    return (
        <div className="row p-4 rounded bg-white">
            <div className="col-12">
                <SectionTitle text={"Meet our new members"} />
            </div>
            <div className="col-12">
                {MemberData && MemberData.map((item:any, idx:number) => {
                    return (
                        <div key={idx}>
                            <MemberCard data={item} />
                        </div>
                    )
                })}
                <ThemeButton hero={'dark'}>Load More</ThemeButton>
            </div>
        </div>
    )
}
export default MemberSection
