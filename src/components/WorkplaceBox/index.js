import React from "react"

export default class WorkplaceBox extends React.Component {

    render() {
        return (
            <div className={"workplace-box"}>
                <div className={"workplace-header"}>
                    <img
                        src={require("../../../public/images/logos/" +
                            this.props.pictureName +
                            ".jpg")}
                        alt={"logo " + this.props.pictureName}
                    />
                    <div className={"workplace-layer"}>
                        <p>{this.props.status}</p>
                        <i className={'fa fa-arrow-circle-down'} />
                    </div>
                </div>
                <div className={"workplace-content"}>
                    <p>Dates :</p>
                    <p>{this.props.dates}</p>
                    <p>Context :</p>
                    <p>{this.props.context}</p>
                    <p>Role :</p>
                    <p>{this.props.role}</p>
                </div>
            </div>
        )
    }
}
