import React from "react"
import PropTypes from 'proptypes'
import Splitter from "../Splitter"

export default class ProjectBox extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        isProjectBoxExpanded: false
    }

    toggleProjectBox = () => {
        this.setState({
            isProjectBoxExpanded: !this.state.isProjectBoxExpanded
        })
    }

    render() {
        const { name, tag, type, language, role, goal, keywords, github, link, image } = this.props
        const { isProjectBoxExpanded } = this.state

        return (
            <li
                className={"project-box " + tag + "-project"}
                onClick={this.toggleProjectBox}
            >
                <div className={"project-header"}>
                    <img
                        src={require('./../../../public/images/projects-render/' + image + '.jpg')}
                        alt={'logo ' + name}
                        className={isProjectBoxExpanded ? "uncurved-image" : "curved-image"}
                    />
                    <div className={
                        "project-layer" +
                        (isProjectBoxExpanded ? " hidden-layer" : "")
                    }>
                        <h4>{name}</h4>
                        <Splitter/>
                        <h5>{role}</h5>
                    </div>
                </div>

                {!isProjectBoxExpanded ? null : (
                    <div className="project-content">
                        <div className="project-titles">
                            <h4>{name}</h4>
                            <h5>{role}</h5>
                        </div>
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
                )}
            </li>
        )
    }
}