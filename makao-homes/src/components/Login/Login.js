
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa' ;
import {BsFillHouseFill} from 'react-icons/bs'
import "./Login.css"
// first install bootstrap
// npm install -save bootstrap
// then install react dom
// npm install --save react-router-dom
function Login(props) {
  // form input controls
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const userdetails = props.userdetails;
  const setUserdetails = props.setUserdetails;

  // const handleChange = (event) => {
  //   setState((prevProps) => ({
  //     ...prevProps,
  //     [event.target.name]: event.target.value
  //   }));
  // };
  function handleSubmit(evt) {
    evt.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        setUserdetails([
          ...userdetails,
          data
        ]);
      })
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(state);

  // };
  
  // navigate to sign up form
  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  // navigation toreset password
  const navigateToResetPassword = () => {
    navigate("/resetpassword")
  }  
    return (
      <div className="Auth-form-container">
       
         

        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <div><hr /></div>
            <h3 className="Auth-form-title">WELCOME BACK, PLEASE LOGIN</h3>
            <div><hr /></div>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={navigateToSignUp}>
                Create Account
              </span>
            </div>
            <div className="form-group mt-3">
              <label>username</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                minLength={8}
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-info" style={{margin: "auto"}}>
                Login
              </button>
            </div>
            <div className="text-center">
                Forgot Password?{" "}
                <span className="link-primary" onClick={navigateToResetPassword}>
                  Reset Here
                </span>

            </div>
            <div><hr />
            </div>
            <div className="text-center">
              <button className="btn btn-info" onClick={navigateToSignUp}>
                Register to view houses
              </button>

              <button className="btn btn-info" onClick={navigateToSignUp}>
                Register to list houses
              </button>
            
           
            </div>

          </div>
        </form>
      </div>
    )

}
export default Login