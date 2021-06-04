import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import AppHeader from "./components/common/header";
import { data } from "./books";
import Book from "./Book";
import AppFooter from "./components/common/footer";
function BookList() {
  return (
    <section>
      <AppHeader />
      <article className="booklist">
        {data.map((book, index) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </article>
      <AppFooter />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
