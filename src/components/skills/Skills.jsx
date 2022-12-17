import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import QaAnalyst from './QaAnalyst'

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>


        <div className="skills__container container grid">
            <Frontend />
            <QaAnalyst />
        </div>
    </section>
  )
}

export default Skills