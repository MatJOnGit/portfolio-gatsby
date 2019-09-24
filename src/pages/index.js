import React from "react"

import styles from './index.css'

import Header from "../components/header"
import Footer from "../components/footer"

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

            <p>Hi !</p>
            <p className={"subtitled"}>
                I'm Mathieu. I'm a junior front-end developer, looking
                for a front-end web developer job in Paris area.
            </p>

            <ValueBox value="curiosity"></ValueBox>

            <p className={"subtitled"}>
                I started self-teaching web development in december 2017, and felt in love with it.
                That's the moment I decided to make a living out of it.
            </p>

            <ValueBox value="rigor"></ValueBox>

            <p className={"subtitled"}>
                Why I love web development ? Simply because I love being able to create
                beautiful and powerful websites, always trying to understand the needs
                and how I can answer it at my best. I'm also monitoring technological developments
                to always keep my knowledge up.
            </p>

            <ValueBox value="teamwork"></ValueBox>

            <p>
                What I like the most in this industry ? Always having great people around
                willing to help each other, and contribute to that spirit by helping future
                great web developers.
            </p>
        </div>

        <Footer />
    </div>
)