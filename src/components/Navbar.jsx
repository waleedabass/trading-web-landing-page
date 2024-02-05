import "./Navbar.css"

function Navbar() {
  return (
    <div className="bg-img">
      <div className="navbar">
        <div className="logo"></div>
        <ul>
          <li>Trade</li>
          <li>Markets</li>
          <li>Resources</li>
          <li>Contact Us</li>
        </ul>
        <button>Login/Sign-up</button>
      </div>
    </div>
  );
}

export default Navbar;