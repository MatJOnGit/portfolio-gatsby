import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <header>
        <h1>Mathieu Jourdan</h1>
        <h2>Junior frontend developer</h2>
        <ul style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <ListLink to="/">About me</ListLink>
            <ListLink to="/training-and-jobs/">Training and jobs</ListLink>
            <ListLink to="/projects/">Projects list</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
        {children}
    </header>
)