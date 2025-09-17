import React from "react";

function UserProfile() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow p-4 bg-light">
            <h2 className="text-primary mb-4 text-center">User Profile</h2>
            <p>
              <strong>Name:</strong> Manan Trivedi
            </p>
            <p>
              <strong>Email:</strong> manan@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9999999999
            </p>
            <p>
              <strong>Address:</strong> xyz......
            </p>
            <button className="btn btn-outline-secondary mt-3">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
