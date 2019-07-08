import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import WorkplaceBox from "../components/WorkplaceBox"

import { resumeInfo } from "../data/resumeInfo"

import styles from "./resume.css"
import "font-awesome/css/font-awesome.min.css"

export default class Resume extends React.PureComponent {
    render() {
        return (
            <div className={"wrapper"}>
                <Header />

                <div className={"content"}>
                    {resumeInfo.map(jobItem => (
                        <WorkplaceBox
                            key={jobItem.name}
                            name={jobItem.name}
                            pictureName={jobItem.pictureName}
                            status={jobItem.status}
                            context={jobItem.context}
                            role={jobItem.role}
                            dates={jobItem.dates}
                            image={jobItem.image}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        )
    }
}