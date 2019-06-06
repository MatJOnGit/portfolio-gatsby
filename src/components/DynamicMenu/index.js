import React from "react"
import {Link} from "gatsby"
import menuLink from "./../../data/links"
import {recentProjectsInfo} from "../../data/recentProjectsInfo";
import ProjectBox from "../ProjectBox";

export default class DynamicMenu extends React.Component {
    render() {
        const ListLink = props => (
            <li>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )

        return (
            <div className="dynamic-menu-container">
                <ul className="header-menu">
                    <ListLink to="/">About me</ListLink>
                    <ListLink to="/resume/">Resume</ListLink>
                    <ListLink to="/recent-projects/">Recent projects</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
                <ul className="footer-menu">
                    <li><a href="https://github.com/MatJOnGit">Github</a></li>
                    <li><a href="https://mobile.twitter.com/MathieuOnTwit">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/mathieu-jourdan/">Linkedin</a></li>
                </ul>
                {menuLink.header.map(headerLinkItem => (
                    <p>headerLinkItem.name</p>
                ))}
            </div>
        )
    }
}