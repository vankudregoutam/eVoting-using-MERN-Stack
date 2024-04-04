import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Webcam from 'react-webcam'

const UserSignUp = () => {

    // const [image, setImage] = useState(null);

    // const webcamRef = React.useRef(null);

    // const capture = React.useCallback(() => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     setImage(imageSrc);
    //     // Now you can send the captured image to the Face API and store the data in MongoDB.
    // }, [webcamRef]);

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ name: '', id: '', dob: '', password: '', cpassword: '', image: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, id, dob, password, cpassword, image } = credentials
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, id, dob, password, cpassword, image })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            sessionStorage.setItem('token eVoting Signup', json.authToken)
            navigate('/login')
        } else {
            alert('Invalid credentials')
            console.error();;
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container my-5'>
                <center>
                    <h3>User Registration</h3><br />
                    <div className="card mx-5" style={{ width: '40rem' }}>
                        <div className="card-body mx-5">
                            <div className='auth-form-container my-3'></div>
                            <div className="container my-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 row">
                                        <label htmlFor="name" className="form-label col-sm-4">Name</label>
                                        <input type="text" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.name} onChange={onChange} id="name" name='name' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="id" className="form-label col-sm-4">Id</label>
                                        <input type="id" className="form-control col-sm-10 w-50" maxLength={10} autoComplete='off' value={credentials.id} onChange={onChange} id="id" name='id' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="dob" className="form-label col-sm-4">Date of Birth</label>
                                        <input type="dob" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.dob} onChange={onChange} id="dob" name='dob' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="form-label col-sm-4">Password</label>
                                        <input type="password" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.password} onChange={onChange} id="password" name='password' />
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="cpassword" className="form-label col-sm-4">Confirm Password</label>
                                        <input type="password" className="form-control col-sm-10 w-50" autoComplete='off' value={credentials.cpassword} onChange={onChange} id="cpassword" name='cpassword' />
                                    </div>
                                    {/* <div className="mb-3 row">
                                        <label htmlFor="image" className='form-label col-sm-4'>Image</label> */}
                                        {/* <input type='image' className='form-control col-sm-10 w-50' value={credentials.image} placeholder='Capture Image' /> */}
                                        {/* <Webcam
                                            audio={false}
                                            ref={webcamRef}
                                            screenshotFormat="image/jpeg"
                                            required
                                        />
                                        <br /><br />
                                        <button className='btn btn-primary' onClick={capture}>Capture</button> */}
                                        {/* {image && <img src={image} alt="Captured" />} */}
                                    {/* </div> */}
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                                <div className="btn" onClick={() => navigate('/login')}>Already have an account? Login Here.</div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default UserSignUp
