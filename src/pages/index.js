import React from 'react'
import './index.css'

import Header from '../components/Header/Header'
import ValueCard from '../components/ValueCard/ValueCard'
import { valuesInfo } from '../database/valuesInfo'

export default class Index extends React.PureComponent {
    render() {
        return (
            <div className={"wrapper"}>
                <Header/>

                <div className={"content"}>
                    <h3>About me</h3>

                    <div className={"intro-speech"}>
                        <p>Hi !</p>
                        <p>
                            I'm Mathieu and I'm a junior web developer. I've been training for the past two years to become a frontend developer.<br/>
                            I'm now using my free time to test new things, build new projects and discover new
                            technologies.<br/>
                            My goal is simply to find a frontend job in Paris area.
                        </p>
                    </div>

                    <ul className="value-list">
                        {valuesInfo.map(valueItem => (
                            <ValueCard
                                key={valueItem.name}
                                name={valueItem.name}
                                speech={valueItem.speech}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}