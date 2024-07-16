import React, { useState } from 'react'
import CandidateContext from './candidateContext'

const CandidateState = (props) => {
    const host = process.env.BACKEND_URI
    const candidatesInitial = []

    const [candidates, setCandidates] = useState(candidatesInitial)

    // Get Candidate
    const getCandidates = async () => {
        const response = await fetch(`${host}/fetchallcandidates`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem('admin token eVoting')
            }
        });
        const json = await response.json()
        setCandidates(json)
    }
    
    // Get Candidate for Voters
    const getCandidatesforVoters = async () => {
        const response = await fetch(`${host}/fetchallcandidates`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem('token eVoting Login')
            }
        });
        const json = await response.json()
        setCandidates(json)
    }

    // Add Candidate
    const addCandidate = async (name, partyname) => {
        const response = await fetch(`${host}/addCandidate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem('admin token eVoting')
            },
            body: JSON.stringify({ name, partyname }),
        });
        const candidate = await response.json();
        setCandidates(candidates.concat(candidate))
    }

    // Delete Candidate
    const deleteCandidate = async (id) => {
        await fetch(`${host}/deleteCandidate/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem('admin token eVoting')
            }
        });
        const newCandidate = candidates.filter((candidate) => { return candidate._id !== id })
        setCandidates(newCandidate)
    }

    // Edit Candidate
    const editCandidate = async (id, name, partyname) => {
        await fetch(`${host}/updateCandidate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": sessionStorage.getItem('admin token eVoting')
            },
            body: JSON.stringify({ name, partyname }),
        });

        let newCandidate = JSON.parse(JSON.stringify(candidates))
        for (let index = 0; index < newCandidate.length; index++) {
            const element = newCandidate[index];
            if (element._id === id) {
                newCandidate[index].name = name
                newCandidate[index].partyname = partyname
                break
            }
        }
        setCandidates(newCandidate)
    }

    return (
        <>
            <CandidateContext.Provider value={{ candidates, setCandidates, getCandidates, getCandidatesforVoters, addCandidate, deleteCandidate, editCandidate }}>
                {props.children}
            </CandidateContext.Provider>
        </>
    )
}

export default CandidateState
