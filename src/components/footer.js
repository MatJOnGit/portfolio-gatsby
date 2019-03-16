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
            <li><a href="https://github.com/MatJOnGit">Github</a></li>
            <li><a href="https://twitter.com/MathieuJourdan3   ">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/mathieu-jourdan/">Linkedin</a></li>
        </ul>
    </footer>
)