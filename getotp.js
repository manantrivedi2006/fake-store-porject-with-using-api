import React from "react";
import "./getotp.css"

function OTPForm() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 otp-bg">
      <div className="card shadow p-4 text-center" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="mb-4 fw-bold">Enter your OTP</h3>

        <form action="/home">
          <div className="d-flex justify-content-between mb-4">
            <input type="text" maxLength="1" className="myotpinput form-control text-center mx-1" />
            <input type="text" maxLength="1" className="myotpinput form-control text-center mx-1" />
            <input type="text" maxLength="1" className="myotpinput form-control text-center mx-1" />
            <input type="text" maxLength="1" className="myotpinput form-control text-center mx-1" />
          </div>

          <div className="d-grid mb-3">
            <input type="submit" value="Submit OTP" className="btn btn-primary" />
          </div>

          <div className="d-grid">
            <button type="reset" className="btn btn-outline-secondary">
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OTPForm;
