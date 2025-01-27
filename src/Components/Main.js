import React, { useState, useEffect } from "react";
import Card from "./bookCard";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      if (!search.trim()) {
        alert("Please enter a search term!");
        return;
      }
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC0CNYp_BOtzMvgbBrJVFD3LznIa_uL6Qs&maxResults=40`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  // Scroll to the books section after bookData is updated
  useEffect(() => {
    if (bookData.length > 0) {
      const booksSection = document.querySelector(".container");
      if (booksSection) {
        booksSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [bookData]); // Runs whenever bookData changes

  return (
    <>
      <div className="header">
        <div className="firstRow">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="secondRow">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter The Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
