import React from 'react'
import PropTypes from 'proptypes'
import style from './ProjectCard.css'
import Splitter from '../Splitter/Splitter'

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
        const { name, role, goal, keywords, github, link, image } = this.props
        const { isProjectCardExpanded } = this.state

        return (
            <li
                className={"project-card"}
                onClick={this.toggleProjectCard}
            >
                <div className={"project-header"}>
                    <img
                        src={require('./../../../public/images/projects-render/' + image + '.jpg')}
                        alt={'logo ' + name}
                        className={isProjectCardExpanded ? "uncurved" : "curved"}
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
                    <div className="project-links">
                        <a href={github}><i className="fa fa-file-code-o"/>Source code</a>
                        <a href={link}><i className="fa fa-play"/>Go to project</a>
                    </div>
                </div>
            </li>
        )
    }
}