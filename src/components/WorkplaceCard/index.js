import React from "react"
import PropTypes from 'proptypes'
import Splitter from "../Splitter"

export default class WorkplaceCard extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        isWorkplaceCardExpanded: false
    }

    toggleWorkplaceCard = () => {
        this.setState({
            isWorkplaceCardExpanded: !this.state.isWorkplaceCardExpanded
        })
    }

    render() {
        const { name, pictureName, status, dates, context, role, backgroundColor } = this.props
        const { isWorkplaceCardExpanded } = this.state

        return (
            <li
                className={"workplace-card"}
                onClick={this.toggleWorkplaceCard}
            >
                <div
                    className={"workplace-header" + (isWorkplaceCardExpanded ? " uncurved-header" : " curved-header")}
                >
                    <img
                        src={require("../../../public/images/logos/" + pictureName + ".jpg")}
                        alt={"logo " + pictureName}
                        className={isWorkplaceCardExpanded ? "uncurved-image" : "curved-image"}
                    />
                    <div className={
                        "workplace-layer" +
                        (isWorkplaceCardExpanded ? " hidden-layer" : "")
                    }>
                        <h4>{name}</h4>
                        <Splitter/>
                        <h5>{status}</h5>
                    </div>
                </div>

                <div className={"workplace-content" + (!isWorkplaceCardExpanded ? " hidden-workplace-content" : "")}>
                    <h5>{status}</h5>
                    <Splitter/>
                    <div className="workplace-details">
                        <p><i className="fa fa-calendar"></i>{dates}</p>
                        <p><i className="fa fa-address-card-o"></i>{context}</p>
                        <p><i className="fa fa-bullseye"></i>{role}</p>
                    </div>
                </div>
            </li>
        )
    }
}