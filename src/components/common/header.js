import React from "react";

function AppHeader() {
  return (
    <header className="AppHeader">
      <section>
        <article className="logo">
          <a href="#">LOGO</a>
        </article>
      </section>
      <section className="con-navbar">
        <article className="navbar">
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </article>
      </section>
    </header>
  );
}

export default AppHeader;
