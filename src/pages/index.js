import React from "react"

import styles from './index.css'

import Header from "../components/header"

const ValueBox = props => (
    <div className="value-box">
        <img src={require('./../../public/images/values/' + props.value + '-opacity.png')} alt={props.value} />
        <p className={props.value + "-value"}>{"#" + props.value.charAt(0).toUpperCase() + props.value.slice(1)}</p>
    </div>
)

export default () => (
    <div className={"wrapper"}>
        <Header />

        <div className={"content"}>
            <h3>About me</h3>

            <div className={"intro-speech"}>
                <p>Hi !</p>
                <p>
                    I'm Mathieu and I'm a junior web developer.
                    I've been training for the past two years to become a frontend developer, starting with a mentor.
                </p>
                <p>
                    I'm now using my free time to test new things, build new projects and discover new technologies...
                </p>
                <p className={"subtitled"}>
                    My goal is simply to find a frontend job in Paris area.
                </p>
            </div>

            <ValueBox value="curiosity"></ValueBox>

            <p className={"value-speech subtitled"}>
                I started self-teaching web development in december 2017, and felt in love with it.
                That's the moment I decided to make a living out of it.
            </p>

            <ValueBox value="rigor"></ValueBox>

            <p className={"value-speech subtitled"}>
                Why I love web development ? Simply because I love being able to create
                beautiful and powerful websites, always trying to understand the needs
                and how I can answer it at my best. I'm also monitoring technological developments
                to always keep my knowledge up.
            </p>

            <ValueBox value="teamwork"></ValueBox>

            <p className={"value-speech"}>
                What I like the most in this industry ? Always having great people around
                willing to help each other, and contribute to that spirit by helping future
                great web developers.
            </p>
        </div>
    </div>
)