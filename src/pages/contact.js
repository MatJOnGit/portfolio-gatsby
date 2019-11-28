import React from "react"

import styles from './contact.css'

import Header from "../components/header"

import { resumeInfo } from "../data/resumeInfo"

export default () => (
    <div className="wrapper">
        <Header />

        <div className="content">
            <h3>Contact</h3>

            <div className="contact-container">
                <img src={require('./../../public/images/photos/beach-developping.jpg')} alt="Beach developping" />

                <div className="contact-speech">
                    <p>I'm currently working as a { resumeInfo[0].status.toLowerCase() }.</p>
                    <p>I'm also working on new projects to graduate and become a full-time web developer.<br/>
                        Therefore, I'm always looking for new job opportunities.</p>
                    <p>So ... if you're looking for a brand new web developer with a fresh mind, let's get in touch !</p>

                    <div className="coords">
                        <h4>How to contact me ?</h4>
                        <a href={"mailto:contact@m.jourdan.fr"}>Mail</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)