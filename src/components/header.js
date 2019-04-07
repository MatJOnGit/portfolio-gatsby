import React from "react"
import { Link } from "gatsby"
import styles from './header.css'

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <header>
        <div className={"banner"}>
            <h1>
                Mathieu Jourdan
            </h1>
            <h2>Junior frontend developer</h2>
        </div>
        <ul>
                <ListLink to="/">About me</ListLink>
                <ListLink to="/curriculum/">Curriculum vitae</ListLink>
                <ListLink to="/recent-projects/">Recent projects</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </header>
)