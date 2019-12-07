import React from "react"
import 'font-awesome/css/font-awesome.min.css'

import styles from './contact.css'

import Header from "../components/header"

import { recentProjectsInfo } from "../data/recentProjectsInfo"
import { resumeInfo } from "../data/resumeInfo"

export default () => (
    <div className="wrapper">
        <Header />

        <div className="content">
            <h3>Contact</h3>

            <div className="contact-container">
                <img src={require('./../../public/images/photos/beach-developping.jpg')} alt="me at the beach" />

                <div className="contact-info">
                    <div className="teaser-container">
                        <p>I'm currently working as a { resumeInfo[0].status.toLowerCase() }.</p>
                        <p>I'm also working on new projects to graduate and become a full-time web developer.<br/>
                            Therefore, I'm always looking for new job opportunities.</p>
                        <p>So ... if you're looking for a brand new web developer with a fresh mind, let's get in touch !</p>
                    </div>

                    <div className="coords-container">
                        <h4>How to contact me ?</h4>
                        <ul className="coords">
                            <li><a href={"mailto:contact@m.jourdan.fr"}><i className="fa fa-envelope"/></a></li>
                            <li><a href={"https://www.twitter.com/MathieuOnTwit"}><i className="fa fa-twitter"/></a></li>
                            <li><a href={"https://github.com/MatJOnGit"}><i className="fa fa-github"/></a></li>
                            <li><a href={"https://www.linkedin.com/in/mathieu-jourdan/"}><i className="fa fa-linkedin"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)