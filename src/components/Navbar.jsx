import "./Navbar.css";

function Navbar({ onButtonClick }) {
  return (
    <>
      <div className="navbar">
        <div className="logo"></div>
        <ul>
          <li>Trade</li>
          <li>Markets</li>
          <li>Resources</li>
          <li>
          <button className="oo" onClick={onButtonClick}>
      Contact Us
    </button>
          </li>
        </ul>
        <button className="lii">Login/Sign-up</button>
      </div>
    </>
  );
}

export default Navbar;
