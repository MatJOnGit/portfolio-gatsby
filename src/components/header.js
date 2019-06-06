import React from "react"
import styles from './header.css'
import DynamicMenu from "./DynamicMenu";
import StaticMenu from "./StaticMenu";

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

                <StaticMenu />

                {!isMenuExpanded ? null : (
                    <DynamicMenu />
                )}
            </header>
        )
    }
}