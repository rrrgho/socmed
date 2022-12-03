import React, {FC} from 'react'
import MemberData from "../../../data/member.example";
import MemberCard from "../../moleculs/MemberCard";
import ThemeButton from "../../atoms/ThemeButton";
import SectionTitle from "../../atoms/SectionTitle";
import FriendCard from "../../moleculs/FriendCard";
import FriendData from "../../../data/friend.example";

const FriendSection: FC = () => {
    return (
        <div className="row mt-4 p-4 rounded bg-white">
            <div className="col-12">
                <SectionTitle text={"You might also wanna check"} />
            </div>
            <div className="col-12">
                {FriendData && FriendData.map((item:any, idx:number) => {
                    return (
                        <div key={idx}>
                            <FriendCard data={item} />
                        </div>
                    )
                })}
                <ThemeButton hero={'dark'}>Load More</ThemeButton>
            </div>
        </div>
    )
}
export default FriendSection
