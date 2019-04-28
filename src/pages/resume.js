import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import WorkplaceBox from "../components/WorkplaceBox"

import styles from './resume.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Resume extends React.PureComponent {
    render() {
        return (
            <div className={"wrapper"}>
                <Header />

                <div className={"content"}>
                    <WorkplaceBox
                        name={"Econocom"}
                        pictureName={"econocom"}
                        status={"User support tech"}
                        context={"Windows 10 project testing and deployment"}
                        role={"Solving and mapping users issues, mastering and personalizing" +
                        " future users computers, managing techs plannings on others sites"}
                        dates={"February 2019 - now"}
                    />
                    <WorkplaceBox
                        name={"SNEF"}
                        pictureName={"snef"}
                        status={"Telecom technician"}
                        context={"SFR telephone lines upgrade project"}
                        role={"Find the best setups between two hotspots, edit hotspots setup" +
                        " to match with SFR's databases, edit docs for hotspot's location town hall"}
                        dates={"December 2016 - June 2017"}
                    />
                    <WorkplaceBox
                        name={"Jean-Pierre Vernant High School"}
                        pictureName={"jpvernant"}
                        status={"Administrative employee"}
                        context={"Common tasks in a french high school administration"}
                        role={"Ensure the proper functioning of print machines and inventory " +
                        "replenishments. Assist administratives on office automation issures."}
                        dates={"April 2014 - April 2016"}
                    />
                    <WorkplaceBox
                        name={"Bouygues Telecom"}
                        pictureName={"bouyguestel"}
                        status={"ISD trainee"}
                        context={"Part-time job"}
                        role={"Controle the whole IT stock infogérant's management"}
                        dates={"September 2010 - April 2012"}
                    />
                </div>

                <Footer />
            </div>
        )
    }
}