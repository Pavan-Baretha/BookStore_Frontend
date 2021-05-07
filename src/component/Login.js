import React, { Component } from 'react';

function Login(){
    return(
        <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
        <div className="row justify-content-center">
            <div className="col-sm-7">

                <form id="loginform"  >
                    <h3>Login Form</h3><br></br>

                    <div class="form-group">
                        <input name="emailfield" type="email" class="form-control" id="emailName" placeholder="Enter Username" /><br></br>
                    </div>
                    <div class="form-group">
                        <input name="passwordField" type="password" class="form-control" id="passwordName" placeholder="Enter Password" /><br></br>
                        
                     
                    </div>
                    <div class="form-group " style={{ textAlign: "left" }}>
                        <button  type="submit" class="btn btn-primary">Login</button>
                    </div><br></br>
                    New User Click Here
                    {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
                </form>

            </div>
        </div>
    </div>
    )
}
export default Login;