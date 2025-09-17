import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary border rounded">
      <div className="container-fluid">
        {/* Logo to home */}
        <Link to="/" className="navbar-brand">
          <img
            src="/flipkartlogo2.jpeg"
            className="rounded ms-3"
            height="60"
            width="140"
            alt="Flipkart Logo"
          />
        </Link>

        <form className="d-flex" role="search">
          <input
            className="form-control me-5"
            type="search"
            placeholder="Search for products, brands and more"
            aria-label="Search"
            style={{ width: "500px" }}
          />

          <div className="me-3 ms-3">
            <Link
              className="bi bi-cart3"
              to="/addtocart"
              style={{ fontSize: "30px", textDecoration: "none", color: "black" }}
            ></Link>
          </div>

          <Link className="d-flex me-3 ms-3" to="/seller">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="Become a Seller"
              className="_1XmrCc"
              width="38"
            />
          </Link>
          <Link to="/" className="btn btn-outline-dark d-flex align-items-center">Home</Link>
          <Link
            to="/login"
            className="btn btn-outline-primary ms-2 me-2 d-flex align-items-center"
            title="Login"
          >
            <i className="bi bi-person-circle"></i>
            <span className="ms-1">Login</span>
          </Link>

          <Link
            to="/account"
            className="btn btn-outline-primary ms-2 me-2 d-flex align-items-center"
            title="Account"
          >
            <i className="bi bi-person-circle"></i>
            <span className="ms-1">Account</span>
          </Link>

          <Link to="/more" className="d-flex ms-3 me-3" style={{ color: "black" }}>
            <i
              className="bi bi-three-dots-vertical mt-1"
              style={{ fontSize: "25px" }}
            ></i>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
