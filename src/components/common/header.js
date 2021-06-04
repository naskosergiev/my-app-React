import React from "react";

function AppHeader() {
  return (
    <header className="AppHeader">
      <section>
        <article className="logo">
          <a href="home">LOGO</a>
        </article>
      </section>
      <section className="con-navbar">
        <article className="navbar">
          <ul>
            <li>
              <a className="active" href="home">
                Home
              </a>
            </li>
            <li>
              <a href="home">About Us</a>
            </li>
            <li>
              <a href="home">Books</a>
            </li>
            <li>
              <a href="home">Contacts</a>
            </li>
          </ul>
        </article>
      </section>
    </header>
  );
}

export default AppHeader;
