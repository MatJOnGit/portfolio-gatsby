import React from "react"
import { Link } from "gatsby"
import styles from './header.css'

export default class Header extends React.Component {
    state = {
        isMenuExpanded: false
    }

    toggleMenu = () => {
        this.setState({
            isMenuExpanded: !this.state.isMenuExpanded
        })
    }

    render() {
        const {isMenuExpanded} = this.state

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
                    <button
                        className={"menu-button"}
                        onClick={this.toggleMenu}
                    ></button>
                </div>
                <ul className={"stable-menu"}>
                    <ListLink to="/">About me</ListLink>
                    <ListLink to="/resume/">Resume</ListLink>
                    <ListLink to="/recent-projects/">Recent projects</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>

                {!isMenuExpanded ? null : (
                    <div className={"dynamic-menu-container"}>
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
                    </div>
                )}
            </header>
        )
    }
}