import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from './contact.css'

const Inputbox = props => (
    <div>
        <label htmlFor={props.data}>{props.data.charAt(0).toUpperCase() + props.data.slice(1)}</label>
        <input
            type={props.type}
            name={props.data}
        />
    </div>
)

export default () => (
    <div className={"wrapper"}>
        <Header />

        <div className={"content"}>
            <p>We're just one click away from a new great relationship.</p>
            <p>Let's just fill this form and get started !</p>

            <form action="treatment.php" method="post">
                <Inputbox data="name" type="text"/>
                <Inputbox data="company" type="text"/>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Tell me what I can do for you" rows="5" col="3"></textarea>
                </div>
                <button type={"submit"}>Send</button>
            </form>
        </div>

        <Footer />
    </div>
)