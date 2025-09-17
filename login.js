import React from "react";

import "./Login.css"; // move the CSS from <style> into this file

function Login() {
  return (
    <>
      
      <div className="login-container">
        <div className="login-card">
          {/* Left section */}
          <div className="login-left">
            <h3>Login</h3>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Login Illustration"
            />
          </div>
          {/* Right section */}
          <div className="login-right">
            <h4>Login to MyStore</h4>
            <form action="/">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email/Mobile number"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-login w-100 mb-3">
                Login
              </button>
            </form>
            <div className="divider"></div>
            <p className="text-center text-muted">OR</p>
            <a href="/getotp" className="btn btn-outline-primary w-100 mb-3">
              Request OTP
            </a>
            <p className="text-center">
              New to MyStore?{" "}
              <a href="/signup" className="otp-link">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
