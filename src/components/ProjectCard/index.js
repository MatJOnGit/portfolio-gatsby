import React from "react"
import PropTypes from 'proptypes'
import Splitter from "../Splitter"

export default class ProjectCard extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        isProjectCardExpanded: false
    }

    toggleProjectCard = () => {
        this.setState({
            isProjectCardExpanded: !this.state.isProjectCardExpanded
        })
    }

    render() {
        const { name, type, language, role, goal, keywords, github, link, image } = this.props
        const { isProjectCardExpanded } = this.state

        return (
            <li
                className={"project-card "}
                onClick={this.toggleProjectCard}
            >
                <div className={"project-header"}>
                    <img
                        src={require('./../../../public/images/projects-render/' + image + '.jpg')}
                        alt={'logo ' + name}
                        className={isProjectCardExpanded ? "uncurved-image" : "curved-image"}
                    />
                    <div className={
                        "project-layer" +
                        (isProjectCardExpanded ? " hidden-layer" : "")
                    }>
                        <h4>{name}</h4>
                        <Splitter/>
                        <h5>{role}</h5>
                    </div>
                </div>

                <div className={"project-content" + (!isProjectCardExpanded ? " hidden-project-content" : "")}>
                    <h4>{name}</h4>
                    <h5>{role}</h5>
                    <Splitter/>
                    <div className="project-details">
                        <p><i className="fa fa-bullseye"></i>{goal}</p>
                        <p><i className="fa fa-hashtag"></i>{keywords}</p>
                    </div>
                    <Splitter/>
                    <div className="project-links">
                        <p><a href={github}>Github</a></p>
                        <p><a href={link}>Run project</a></p>
                    </div>
                </div>
            </li>
        )
    }
}