import React from "react"
import PropTypes from 'proptypes'

export default class WorkplaceBox extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    state = {
        isBoxExpanded: false
    }

    toggleBox = () => {
        this.setState({
            isBoxExpanded: !this.state.isBoxExpanded
        })
    }

    render() {
        const { pictureName, status, dates, context, role } = this.props
        const { isBoxExpanded } = this.state

        return (
            <div
                className={"workplace-box"}
                onClick={this.toggleBox}
            >
                <div className={"workplace-header"}>
                    <img
                        src={require("../../../public/images/logos/" +
                            pictureName +
                            ".jpg")}
                        alt={"logo " + pictureName}
                    />
                    <div className={"workplace-layer"}>
                        <p>{status}</p>
                        <i className={
                            isBoxExpanded ? 'fa fa-arrow-circle-up' : 'fa fa-arrow-circle-down'
                        } />
                    </div>
                </div>
                {!isBoxExpanded ? null : (
                    <div className={"workplace-content"}>
                        <p>Dates :</p>
                        <p>{dates}</p>
                        <p>Context :</p>
                        <p>{context}</p>
                        <p>Role :</p>
                        <p>{role}</p>
                    </div>
                )}
            </div>
        )
    }
}