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
        const { pictureName, status, dates, context, role } = this.props
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
                    <div className={"workplace-layer"}>
                        <h4>{status}</h4>
                        <i className={
                            isWorkplaceBoxExpanded ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down'
                        } />
                    </div>
                </div>

                {!isWorkplaceBoxExpanded ? null : (
                    <div className={"workplace-content"}>
                        <p>Dates :</p>
                        <p>{dates}</p>
                        <p>Context :</p>
                        <p>{context}</p>
                        <p>Role :</p>
                        <p>{role}</p>
                    </div>
                )}
            </li>
        )
    }
}