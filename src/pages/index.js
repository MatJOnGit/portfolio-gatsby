import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from './index.css'

const ValueBox = props => (
    <div className="value-box">
        <img src={require('./../../public/images/values/' + props.value + '.jpg')} alt={props.value} />
        <p className={props.value + "-value"}>{"#" + props.value.charAt(0).toUpperCase() + props.value.slice(1)}</p>
    </div>
)

export default () => (
    <div>
        <Header />

        <div className={"content"}>
            <p>Hi !</p>
            <p>
                I'm Mathieu. I'm a junior front-end developer, looking
                for a front-end web developer job in Paris area.
            </p>

            <ValueBox value="teamwork"></ValueBox>

            <ValueBox value="curiosity"></ValueBox>

            <ValueBox value="rigor"></ValueBox>
        </div>

        <Footer />
    </div>
)