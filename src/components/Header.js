import React from "react";
function Header() {
  return (
    <header className="navbar">
      <div className="main-navdiv">
        <a
          className="logo"
          href="page2.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-code"></i>
        </a>
        <nav>
          <ul>
            <li>
              <a className="nav-links" href="page2.html">
                Home
              </a>
            </li>
            <li>
              <a className="nav-links" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-links" href="contact-us.html">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-links" href="about.asp">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
