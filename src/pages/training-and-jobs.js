import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const WorkplaceBox = props => (
    <div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.status}</p>
            <button>See more</button>
        </div>

        <div>
            <h4>Missions</h4>
            <h3>Context : {props.context}</h3>
            <p>{props.role}</p>
        </div>
    </div>
)


export default () => (
    <div>
        <Header>
            <h3>Training and jobs page</h3>
        </Header>

        <div>
            <WorkplaceBox
                name={"Econocom"}
                status={"User support tech"}
                context={"Windows 10 project testing and deployment"}
                role={"Solving and mapping users issues, mastering and personalizing future users computers, managing techs plannings on others sites"}
            />
            <WorkplaceBox
                name={"SNEF"}
                status={"Telecom techn"}
                context={"Projet d'upgrade des lignes de téléphone de SFR"}
                role={"Find the best setups between two hotspots, edit hotspots setup to match with SFR's databases, edit docs for hotspot's location town hall"}
            />
        </div>

        <Footer>
        </Footer>
    </div>
)