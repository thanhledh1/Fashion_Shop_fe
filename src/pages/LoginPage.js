import React from 'react';
import MasterLayout from '../layouts/MasterLayout';

function LoginPage(props) {
    return (
        <MasterLayout>

<>
  <form action="action_page.php" method="post" className="form" >
   
    <div className="container">
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <input
        type="text"
        placeholder="Enter Username"
        name="uname"
        required=""
        className="form-control"
      />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required=""
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <label>
        <input type="checkbox" defaultchecked="checked" name="remember" />{" "}
        Remember me
      </label>
    </div>
    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
      <button type="button" className="btn btn-secondary cancelbtn">
        Cancel
      </button>
      <span className="psw">
        Forgot <a href="#">password?</a>
      </span>
    </div>
  </form>
</>


      </MasterLayout>
    );
}

export default LoginPage;



