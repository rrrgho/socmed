import React from 'react'
import Layout from "../../components/templates/Layout";
import AboutSection from "../../components/organisms/AboutSection";
import Identity from "../../data/identity.example";
import MeetupSection from "../../components/organisms/MeetupSection";

const About = () => {
    return (
        <Layout>
            <AboutSection data={Identity && Identity[0]} />
            <MeetupSection />
        </Layout>
    )
}

export default About
