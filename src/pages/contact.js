import React from "react"

import styles from './contact.css'

import Header from "../components/header"

import { resumeInfo } from "../data/resumeInfo"

export default () => (
    <div className="wrapper">
        <Header />

        <div className="content">
            <h3>Contact</h3>

            <div className="contact-speech">
                <img src={require('./../../public/images/photos/beach-developping.jpg')} alt="Beach developping" />

                <p>I'm currently working as a { resumeInfo[0].status.toLowerCase() }. <br/>
                I'm also working on new projects to be graduated and become a full-time web developer.<br/>
                Therefore, I'm always looking for new job opportunities.<br/>
                 if you're looking for a brand new web developer, let's get in touch !</p>
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
    </div>
)