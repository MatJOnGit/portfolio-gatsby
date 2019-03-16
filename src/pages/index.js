import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ValueBox = props => (
    <div>
        <img src={require('./../../public/images/' + props.value + '.jpg')} alt={props.value} />
        <p>{"#" + props.value.charAt(0).toUpperCase() + props.value.slice(1)}</p>
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

            <ValueBox value="teamwork"></ValueBox>

            <ValueBox value="curiosity"></ValueBox>

            <ValueBox value="rigor"></ValueBox>
        </div>

        <Footer>
        </Footer>
    </div>
)