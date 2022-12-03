import React, {useEffect} from 'react'
import SectionTitle from "../../atoms/SectionTitle";
import MeetupData from "../../../data/meetup.example";
import FriendCard from "../../moleculs/FriendCard";
import MeetupCard from "../../moleculs/MeetupCard";
import Photo from "../../../assets/images/photo.png";

const MeetupSection = () => {
    useEffect(() => {
        console.log(Math.ceil(MeetupData.length/2))
    },[])
    return (
        <>
            <div className="row mt-3">
                <SectionTitle text={"Meetups"}/>
            </div>
            <div className="row d-none d-md-block">
                {MeetupData && MeetupData.map((item:any) => {
                    return (
                        <>
                            <MeetupCard data={item} />
                        </>
                    )
                })}
            </div>
            <div className="row d-block d-md-none">
                {/*{MeetupData && MeetupData.map((item:any) => {*/}
                {/*    return (*/}
                {/*        <>*/}
                {/*            <MeetupCard data={item} />*/}
                {/*        </>*/}
                {/*    )*/}
                {/*})}*/}

                <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="true">
                    <div className="carousel-indicators" style={{position:'absolute', bottom:-10}}>
                        {
                            new Array(Math.ceil(MeetupData.length/2)).fill("").map((item:any, idx:number) => {
                                return (
                                    <button key={idx} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx}
                                            className={idx === 0 ? 'active' : ''}
                                            aria-current="true" aria-label="Slide 1"></button>
                                )
                            })
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            new Array(Math.ceil(MeetupData.length/2)).fill("").map((item:any, idx:number) => {
                                return (
                                    <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ''}`}>
                                        {new Array(2).fill("").map(() => {
                                            return (
                                                <div key={idx}>
                                                    <MeetupCard data={MeetupData[idx]} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MeetupSection
