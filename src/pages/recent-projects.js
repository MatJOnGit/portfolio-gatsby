import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from './recent-projects.css'
import 'font-awesome/css/font-awesome.min.css';

const ProjectBox = props => (
    <div className={"project-box"}>
        <div className={"project-summary"}>
            <h3>{props.name}</h3>
            <i className="fa fa-arrow-circle-down"></i>
            <p>{props.type}</p>
        </div>

        <div className={"project-details"}>
            <ul>
                <li>{props.role}</li>
                <li>{props.goal}</li>
                <li>{props.technologies}</li>
            </ul>
            <p><a href={props.github}>Github</a></p>
            <p><a href={props.link}>Run project</a></p>
        </div>
    </div>
)

export default () => (
    <div className={"wrapper"}>
        <Header />

        <div className={"content"}>
            <ul className={"project-type-list"}>
                <li>All</li>
                <li>Integration</li>
                <li>CMS</li>
                <li>Javascript / React</li>
                <li>PHP / Symfony 4</li>
            </ul>

            <ProjectBox
                name={"Web Agency"}
                type={"Integration"}
                role={"Mockup integration"}
                goal={"Display a responsive one-page website using HTML5 and CSS3 best practices."}
                technologies={"HTML5, CSS3, Javascript, API"}
                github={"https://github.com/MatJOnGit/WebAgency"}
                link={"http://projet1.m-jourdan.fr/"}
            />
            <ProjectBox
                name={"Office de Tourisme de Strasbourg"}
                type={"CMS"}
                role={"Theme customization"}
                goal={"Develop a whole functional website based on a free theme, adding pluggins, SEO and accessibility"}
                technologies={"CSS3, Javascript, Wordpress"}
                github={""}
                link={"http://projet2.m-jourdan.fr/"}
            />
            <ProjectBox
                name={"Ve'Lyon"}
                type={"Web app"}
                role={"Front development"}
                goal={"Display a interactive map to help bickers booking bikes in Lyon"}
                technologies={"HTML5, CSS3, Javascript, jQuery, API"}
                github={"https://github.com/MatJOnGit/Ve-Lyon"}
                link={"http://projet3.m-jourdan.fr/"}
            />
            <ProjectBox
                name={"One way ticket to Alaska"}
                type={"Blog"}
                role={"Front and backend development"}
                goal={"Develop a whole blog system and its backoffice to help a writer publishing his book through blog articles"}
                technologies={"HTML5, CSS3, Javascript, PHP, MySQL"}
                github={"https://github.com/MatJOnGit/One-way-ticket-to-Alaska"}
                link={"http://projet4.m-jourdan.fr/"}
            />
            <ProjectBox
                name={"Personal portfolio"}
                type={"Front website"}
                role={"Front development"}
                goal={"Develop a simple and interactive interface to present my own profil"}
                technologies={"CSS3, Javascript, ReactJS, GatsbyJS"}
                github={""}
                link={"http://m-jourdan.fr"}
            />
            <ProjectBox
                name={"Tough n' Sound"}
                type={"Web app"}
                role={"Front and backend development"}
                goal={"Develop an easy-to-use and complete website to help users customize their own sportive training"}
                technologies={"CSS3, Javascript, Symfony 4"}
                github={""}
                link={""}
            />
        </div>

        <Footer />
    </div>
)