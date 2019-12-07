import React from "react"
import {Link} from "gatsby"

import {recentProjectsInfo} from "../../data/recentProjectsInfo";

import ProjectBox from "../ProjectCard";

export default class DynamicMenu extends React.Component {
    render() {
        const ListLink = props => (
            <li>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )

        return (
            <ul className="dynamic-menu-container">
                <ListLink to="/">About me</ListLink>
                <ListLink to="/resume/">Resume</ListLink>
                <ListLink to="/recent-projects/">Recent projects</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        )
    }
}