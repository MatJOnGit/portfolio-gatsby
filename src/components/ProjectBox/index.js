import React from "react"

export default class ProjectBox extends React.Component {
    render() {
        const { name, type, languages, role, goal, keywords, github, link, image } = this.props

        return (
            <li className={"project-box " + type + "-project"}>
                <div className="project-summary">
                    <img src={require('./../../../public/images/projects-render/' + image + '.jpg')} alt={'logo ' + name}/>
                </div>
            </li>
        )
    }
}