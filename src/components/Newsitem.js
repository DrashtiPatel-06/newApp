import React from "react";

export default function Newsitem(props) {
    let { title, description, imageurl, newsurl, author, date ,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imageurl
                ? "https://jitinchawla.com/wp-content/themes/eikra/assets/img/noimage-420x273.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              className="btn btn-sm btn-dark"
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

