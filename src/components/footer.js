import React from "react"
import styles from './footer.css'

export default ({ children }) => (
    <footer>
        <ul>
            <li style={{ display: `inline-block`, padding: `0 1rem`}}><a href="https://github.com/MatJOnGit">Github</a></li>
            <li style={{ display: `inline-block`, padding: `0 1rem` }}><a href="https://mobile.twitter.com/MathieuOnTwit">Twitter</a></li>
            <li style={{ display: `inline-block`, padding: `0 1rem` }}><a href="https://www.linkedin.com/in/mathieu-jourdan/">Linkedin</a></li>
        </ul>
        <p>All rights reserved</p>
    </footer>
)