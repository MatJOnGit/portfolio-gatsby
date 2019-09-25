import React from "react"
import {Link} from "gatsby"

export default class StaticMenu extends React.Component {
    render() {
        const ListLink = props => (
            <li>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )

        return (
            <ul className={"static-menu"}>
                <ListLink to="/">About me</ListLink>
                <ListLink to="/resume/">Resume</ListLink>
                <ListLink to="/recent-projects/">Recent projects</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        )
    }
}