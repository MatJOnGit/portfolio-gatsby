import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import ProjectBox from "../components/ProjectBox"

import { recentProjectsInfo } from "../data/recentProjectsInfo";

import styles from './recent-projects.css'
import 'font-awesome/css/font-awesome.min.css'

export default class RecentProjects extends React.PureComponent {
    render() {
        return (
            <div className={"wrapper"}>
                <Header />

                <div className={"content"}>
                    <ul className={"project-type-list"}>
                        <li className={"rounded"}>All</li>
                        <li className={"rounded"}>Integration</li>
                        <li className={"rounded"}>CMS</li>
                        <li className={"rounded"}>Javascript / React</li>
                        <li className={"rounded"}>PHP / Symfony 4</li>
                    </ul>

                    {recentProjectsInfo.map(projectItem => (
                        <ProjectBox
                            key={projectItem.name}
                            name={projectItem.name}
                            role={projectItem.role}
                            goal={projectItem.goal}
                            technologies={projectItem.technologies}
                            github={projectItem.github}
                            link={projectItem.link}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        )
    }
}