import React, { useContext } from 'react'
import candidateContext from '../context/candidates/candidateContext'

const About = () => {
    const a = useContext(candidateContext)
    return (
        <>
            This is about {a.name}
        </>
    )
}

export default About
