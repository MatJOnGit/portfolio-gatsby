import React from 'react'

import './resume.css'

import Header from '../components/Header/header'
import WorkplaceBox from '../components/WorkplaceCard'

import { resumeInfo } from '../data/resumeInfo'

export default class Resume extends React.PureComponent {
    render() {
        return (
            <div className={"wrapper"}>
                <Header />

                <div className={"content"}>
                    <h3>Resume</h3>
                    <ul className={"workplace-list"}>
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
                    </ul>
                </div>
            </div>
        )
    }
}