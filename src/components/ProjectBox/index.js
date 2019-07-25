import React from "react"
import PropTypes from 'proptypes'

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
        const { name, type, role, goal, keywords, github, link, image } = this.props
        const { isProjectBoxExpanded } = this.state

        return (
            <li
                className={"project-box " + type + "-project"}
                onClick={this.toggleProjectBox}
            >
                <img src={require('./../../../public/images/projects-render/' + image + '.jpg')} alt={'logo ' + name}/>
                <div className={"project-layer"}></div>
                <div className={"project-titles"}>
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                </div>

                {!isProjectBoxExpanded ? null : (
                    <ul className="project-details">
                        <li><i className="fa fa-briefcase"></i>{role}</li>
                        <li><i className="fa fa-bullseye"></i>{goal}</li>
                        <li><i className="fa fa-hashtag"></i>{keywords}</li>
                        <li><a href={github}>Github</a></li>
                        <li><a href={link}>Run project</a></li>
                    </ul>
                )}
            </li>
        )
    }
}