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
                    <h3>Recent projects</h3>

                    <ul className={"project-list"}>
                        {recentProjectsInfo.map(projectItem => (
                            <ProjectBox
                                key={projectItem.name}
                                name={projectItem.name}
                                tag={projectItem.tag}
                                type={projectItem.type}
                                languages={projectItem.languages}
                                role={projectItem.role}
                                goal={projectItem.goal}
                                keywords={projectItem.keywords}
                                github={projectItem.github}
                                link={projectItem.link}
                                image={projectItem.image}
                            />
                        ))}
                    </ul>
                </div>

                <Footer />
            </div>
        )
    }
}