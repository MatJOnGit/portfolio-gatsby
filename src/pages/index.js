import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import teamworkPic from "./../../public/images/teamwork.jpg"
import rigorPic from "./../../public/images/rigor.jpg"
import curiosityPic from "./../../public/images/curiosity.jpg"

const ValueBox = props => (
    <div>
        <img src={props.url} alt={props.value} />
        <p>#{props.value}</p>
    </div>
)

export default () => (
    <div>
        <Header>
            <h3>About me page</h3>
        </Header>

        <div>
            <p>
                Hi !<br/>
                I'm Mathieu. I'm a junior front-end developer, looking for a front-end web developer job in Paris area ...
            </p>
            <div>
                <img src={teamworkPic} alt="Teamwork" />
                <p>#Teamwork</p>
            </div>

            <div>
                <img src={rigorPic} alt="Rigor" />
                <p>#Rigor</p>
            </div>

            <ValueBox value="Rigor" url="rigorPic">
            </ValueBox>
        </div>

        <Footer>
        </Footer>
    </div>
)