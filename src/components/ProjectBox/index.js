import React from "react"

export default class ProjectBox extends React.Component {
    render() {
        const { name, type, role, goal, technologies, github, link } = this.props

        return (
            <div className={"project-box"}>
                <div className={"project-summary"}>
                    <h3>{name}</h3>
                    <i className="fa fa-arrow-circle-down"></i>
                    <p className={"project-type"}>{type}</p>
                </div>

                <div className={"project-details"}>
                    <ul>
                        <li><i className="fa fa-briefcase"></i>{role}</li>
                        <li><i className="fa fa-bullseye"></i>{goal}</li>
                        <li><i className="fa fa-code"></i>{technologies}</li>
                    </ul>
                    <p><a href={github}>Github</a></p>
                    <p><a href={link}>Run project</a></p>
                </div>
            </div>
        )
    }
}