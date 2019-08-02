import React from "react"
import PropTypes from 'proptypes'

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
                        src={require("../../../public/images/logos/" +
                            pictureName +
                            ".jpg")}
                        alt={"logo " + pictureName}
                    />
                    <div className={
                        "workplace-layer" +
                        (isWorkplaceBoxExpanded ? "hidden-layer" : "")
                    }>
                        <h4>{name}</h4>
                        <h5>{status}</h5>
                    </div>
                </div>

                {!isWorkplaceBoxExpanded ? null : (
                    <div className={"workplace-content"}>
                        <h4>{name}</h4>
                        <h5>{status}</h5>
                        <p><i className="fa fa-calendar"></i>{dates}</p>
                        <p><i className="fa fa-address-card-o"></i>{context}</p>
                        <p><i className="fa fa-bullseye"></i>{role}</p>
                        <i className={'fa fa-arrow-circle-up'}/>
                    </div>
                )}
            </li>
        )
    }
}