import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <footer style={{ display: 'flex' }}>
        <p>All rights reserved</p>
        <ul>
            <ListLink to="http://www.github.com">Github</ListLink>
            <ListLink to="/training-and-jobs/">Twitter</ListLink>
            <ListLink to="/projects/">Linkedin</ListLink>
        </ul>
        {children}
    </footer>
)