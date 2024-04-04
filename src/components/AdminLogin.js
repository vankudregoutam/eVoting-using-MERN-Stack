import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ id: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://evoting-using-mern-stack.netlify.app/api/auth/admin-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: credentials.id, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            sessionStorage.setItem('admin token eVoting', json.authToken)
            navigate('/addcandidate')
        } else
            alert('Invalid credentials')
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container my-5'>
                <center>
                    <h3>Admin Login</h3><br />
                    <div className="card mx-5" style={{ width: '40rem' }}>
                        <div className="card-body mx-5">
                            <div className='auth-form-container my-3'></div>
                            <div className="container my-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 row">
                                        <label htmlFor="id" className="form-label col-sm-4">Id</label>
                                        <input type="id" className="form-control col-sm-10 w-50" autoComplete='off' maxLength={10} value={credentials.id} onChange={onChange} id="id" name='id' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="form-label col-sm-4">Password</label>
                                        <input type="password" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.password} onChange={onChange} id="password" name='password' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                                <div className="btn" onClick={() => navigate('/signup')}>Don't have an account? Register Here.</div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default AdminLogin
