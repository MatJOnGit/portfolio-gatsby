import React from "react"
import { Link } from "gatsby"
import styles from './header.css'

export default class Header extends React.Component {
    render () {
        const ListLink = props => (
            <li>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )
        
        return (
                <header>
                    <div className={"banner"}>
                        <img src={require('../../public/images/logos/mj-logo.png')} alt={"logo Mathieu Jourdan"}/>
                        <div className={"title"}>
                            <h1>Mathieu Jourdan</h1>
                            <h2>Junior frontend developer</h2>
                        </div>
                        <button className={"menu-button"}></button>
                    </div>
                    <ul>
                        <ListLink to="/">About me</ListLink>
                        <ListLink to="/resume/">Resume</ListLink>
                        <ListLink to="/recent-projects/">Recent projects</ListLink>
                        <ListLink to="/contact/">Contact</ListLink>
                    </ul>
                </header>
            )
    }
}