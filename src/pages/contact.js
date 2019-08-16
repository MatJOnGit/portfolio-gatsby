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
            <h3>Contact</h3>

            <img src={require('./../../public/images/photos/beach-developping.jpg')} alt="Beach developping" />

            <p><b><em>(A retravailler en expliquant qu'il s'agit d'une reconversion pro.)</em></b></p>
            <p>As you can see on my resume, I'm currently working as <b><em>(commande pour afficher le dernier job en liste en minuscules)</em></b></p>
            <p>I'm also working on new projects to get graduate and evolve on new technologies like React, VueJS and Symfony.</p>

            <p>You're looking for a new web developer ? Then, let's get in touch</p>

            <button className="contact-button">Contact me</button>
        </div>

        <Footer />
    </div>
)