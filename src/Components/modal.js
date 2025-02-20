import React from "react";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className={`overlay ${show ? "show" : ""}`}>
        <div className={`overlay-inner ${show ? "show" : ""}`}>
          <button className="close" onClick={onClose}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt={item.volumeInfo.title} />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                More
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
