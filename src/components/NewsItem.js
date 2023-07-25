import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

let summary = "";

const NewsItem = (props) => {
  summary = props.summary;

  // let { title, description, imageUrl, newsUrl, author, date, source } = props;
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
          <span className="badge rounded-pill bg-danger"> {props.source} </span>
        </div>
        <img
          src={
            !props.imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : props.imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={!props.newsUrl ? "/" : props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark button"
          >
            Read More
          </a>
          <Link
            to="/Summary"
            className="btn btn-sm btn-dark button"
            style={{ marginLeft: 20 }}
          >
            Summary
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {};

export default NewsItem;
