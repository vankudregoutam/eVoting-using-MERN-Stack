import React, { useContext, useEffect, useState } from 'react'
import candidateContext from '../context/candidates/candidateContext'
import { useNavigate } from 'react-router-dom'

const AddCandidate = () => {
    const context = useContext(candidateContext)
    const { addCandidate } = context
    const navigate = useNavigate()

    const [candidate, setCandidate] = useState({ name: '', partyname: '' })

    const handleClick = (e) => {
        e.preventDefault()
        addCandidate(candidate.name, candidate.partyname)
        setCandidate({ name: '', partyname: '' })
    }

    const onChange = (e) => {
        setCandidate({ ...candidate, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (!sessionStorage.getItem('admin token eVoting')) {
            navigate('/adminlogin')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="container my-3">
                <h2>Add Candidate</h2>
                <form onSubmit={handleClick}>
                    <div className="mb-3 row">
                        <label htmlFor="name" className="form-label col-sm-2">Name</label>
                        <input type="text" autoComplete='off' className="form-control col-sm-10 w-50" id="name" name='name' value={candidate.name} onChange={onChange} />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="partyname" className="form-label col-sm-2">Party Name</label>
                        <input type="text" autoComplete='off' className="form-control col-sm-10 w-50" id="partyname" name='partyname' value={candidate.partyname} onChange={onChange} />
                    </div>
                    <button disabled={candidate.name.length<5 || candidate.partyname.length<5} type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddCandidate
