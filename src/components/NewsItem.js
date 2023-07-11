import React from "react";
import "./style.css";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 cardos">
      <div
        className="card cardos"
        style={styles.cardos}
        // style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark button"
          >
            Read More
          </a>
          <a
            rel="noreferrer"
            href="/"
            target="_blank"
            className="btn btn-sm btn-dark button"
            style={{ marginLeft: 20 }}
          >
            Summary
          </a>
        </div>
      </div>
    </div>
  );
};
const styles = {};

export default NewsItem;
