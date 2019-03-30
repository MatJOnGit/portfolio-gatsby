import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Inputbox = props => (
    <div>
        <label htmlFor={props.data}></label>
        <input
            type={props.type}
            name={props.data}
            placeholder={props.data}
        />
    </div>
)


const Textareabox = props => (
    <div>
        <label htmlFor={props.data}></label>
        <textarea name={props.data} placeholder={props.data}></textarea>
    </div>
)

export default () => (
    <div>
        <Header>
        </Header>

        <div>
            <p>Let's build our new friendship.</p>
            <p>First step : here's a form ... just FILL IT !</p>
        </div>

        <form action="treatment.php" method="post">
            <Inputbox data="name" type="text"/>
            <Inputbox data="company" type="text"/>
            <Textareabox data="message"/>
        </form>

        <Footer>
        </Footer>
    </div>
)