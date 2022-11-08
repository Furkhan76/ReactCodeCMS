import React from "react"
import { Link } from "react-router-dom";
import '../css/AdminLogin.css';
export class AdminLogin extends React.Component{  
    render(){
        return(
      <div className="Member">

      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Admin Id</label>
            <input
              id="userid"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <Link to={"/getalladmins"} className="btn btn-success">
              Submit
          </Link>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      <div>
                   <footer className="style">
                    © 2022 Claim Management System
                    </footer>
                    </div>
    </div>
    
  )
}
}