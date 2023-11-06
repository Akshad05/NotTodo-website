import React from "react";

import "./style.css";
const SideAdd = (props) => {
  return (
    <form
      className={props.sideAdd ? "sideAdd sideAdd--open" : "sideAdd"}
      action="/add"
      style={{
        margin: "auto",
        backgroundColor: "rgba(15, 14, 14, 0.7)",
        borderRadius: 20,
        marginBottom: 40,
      }}
      onSubmit={props.handleSubmit}
    >
      <div className="sideAddComp">
        <div>
          <label className="form-label">Title</label>
          <input
            style={{ width: 500 }}
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            id="title"
            value={props.values.title}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
        </div>
        <div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              style={{ width: 500 }}
              className="form-control"
              rows="3"
              placeholder="Description"
              name="description"
              id="description"
              value={props.values.description}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            ></textarea>
          </div>

          <div>
            <label className="form-label">Due Date</label>
            <input
              style={{ width: 500 }}
              type="date"
              className="form-control"
              name="dueDate"
              id="dueDate"
              value={props.values.date}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>

          <div>
            <div className="radio">
              <label>Priority: </label>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="1"
                  onChange={(e) => {
                    props.handleChange(e);
                  }}
                  onBlur={props.handleBlur}
                />
                High
              </div>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="2"
                  onChange={(e) => {
                    props.handleChange(e);
                  }}
                  onBlur={props.handleBlur}
                />
                Medium
              </div>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="3"
                  onChange={(e) => {
                    props.handleChange(e);
                  }}
                  onBlur={props.handleBlur}
                />
                Low
              </div>
            </div>
            <input
              style={{ width: 500 }}
              type="submit"
              value="Submit"
              className="bttn"
              onClick={props.PostData}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default SideAdd;
