import React from "react"
import PropTypes from 'proptypes'

export default class ValueCard extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        const { name, speech } = this.props

        return (
            <li
                className={"value-card"}
            >
                <div className={"value-box"}>
                    <img
                        src={require('./../../../public/images/values/' + name + '-opacity.png')}
                        alt={name}
                    />
                    <p className={name + "-value"}>
                        {"#" + name.charAt(0).toUpperCase() + name.slice(1)}
                    </p>
                </div>
                <p className={"value-speech"}>
                    {speech}
                </p>
            </li>
        )
    }
}