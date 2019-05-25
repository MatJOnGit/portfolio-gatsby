import React from "react"

export default (props) => (
    <div className="value-box">
        <img src={require('./../../public/images/values/' + props.value + '-opacity.png')} alt={props.value} />
        <p className={props.value + "-value"}>{"#" + props.value.charAt(0).toUpperCase() + props.value.slice(1)}</p>
    </div>
)