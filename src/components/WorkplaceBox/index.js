import React from "react"
import PropTypes from 'proptypes'
import Splitter from "../Splitter"

export default class WorkplaceBox extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        isWorkplaceBoxExpanded: false
    }

    toggleWorkplaceBox = () => {
        this.setState({
            isWorkplaceBoxExpanded: !this.state.isWorkplaceBoxExpanded
        })
    }

    render() {
        const { name, pictureName, status, dates, context, role } = this.props
        const { isWorkplaceBoxExpanded } = this.state

        return (
            <li
                className={"workplace-box"}
                onClick={this.toggleWorkplaceBox}
            >
                <div className={"workplace-header"}>
                    <img
                        src={require("../../../public/images/logos/" + pictureName + ".jpg")}
                        alt={"logo " + pictureName}
                        className={isWorkplaceBoxExpanded ? "uncurved-image" : "curved-image"}
                    />
                    <div className={
                        "workplace-layer " +
                        (isWorkplaceBoxExpanded ? "hidden-layer" : "")
                    }>
                        <h4>{name}</h4>
                        <Splitter/>
                        <h5>{status}</h5>
                    </div>
                </div>

                {!isWorkplaceBoxExpanded ? null : (
                    <div className={"workplace-content"}>
                        <div className="workplace-titles">
                            <h4>{name}</h4>
                            <h5>{status}</h5>
                        </div>
                        <Splitter/>
                        <div className="workplace-details">
                            <p><i className="fa fa-calendar"></i>{dates}</p>
                            <p><i className="fa fa-address-card-o"></i>{context}</p>
                            <p><i className="fa fa-bullseye"></i>{role}</p>
                        </div>
                    </div>
                )}
            </li>
        )
    }
}