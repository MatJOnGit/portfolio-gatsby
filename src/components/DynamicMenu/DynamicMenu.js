import React from 'react'
import {Link} from 'gatsby'
import style from './DynamicMenu.css'

export default class DynamicMenu extends React.Component {
    render() {
        const ListLink = props => (
            <li className={"link-card curved"}>
                <Link to={props.to}>
                    <i className={"fa fa-" + props.icon}/>
                    {props.children}
                </Link>
            </li>
        )

        return (
            <ul className="dynamic-menu-container">
                <ListLink to="/" icon="user">About me</ListLink>
                <ListLink to="/resume/" icon="briefcase">Resume</ListLink>
                <ListLink to="/recent-projects/" icon="flask">Recent projects</ListLink>
                <ListLink to="/contact/" icon="address-card">Contact</ListLink>
            </ul>
        )
    }
}