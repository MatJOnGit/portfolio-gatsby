import React from "react"

import styles from './contact.css'

import Header from "../components/header"
import Footer from "../components/footer"

import { resumeInfo } from "../data/resumeInfo"


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
    <div className="wrapper">
        <Header />

        <div className="content">
            <h3>Contact</h3>

            <div className="contact-speech">
                <img src={require('./../../public/images/photos/beach-developping.jpg')} alt="Beach developping" />

                <p>I'm currently working as a { resumeInfo[0].status.toLowerCase() }. </p>
                <p>I'm also working on new projects to be graduated and soon become a full-time web developer.</p>
                <p>Therefore, I'm always looking for new job oportunities.</p>
                <p>So if you're looking for a brand new web developer, let's get in touch !</p>
            </div>

            <div className="coords">
                <div>
                    <h4>EMAIL</h4>
                    <p>contact@m-jourdan.fr</p>
                </div>

                <div>
                    <h4>PHONE NUMBER</h4>
                    <p>06.50.60.22.19</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
)