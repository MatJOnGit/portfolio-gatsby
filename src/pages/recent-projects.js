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
                        <li className={"rounded"}>Javascript</li>
                        <li className={"rounded"}>PHP</li>
                    </ul>

                    <ul className={"project-list"}>
                        {recentProjectsInfo.map(projectItem => (
                            <ProjectBox
                                key={projectItem.name}
                                type={projectItem.type}
                                name={projectItem.name}
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