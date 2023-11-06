import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useFormik } from "formik";
import { title, desc, id, dueDate, priority } from "./Admin_Nottodo";
import { useEffect } from "react";
import { ele } from "./Admin_Nottodo";

const SideUpdate = () => {
  const history = useHistory();

  const initialValues = {
    title: title,
    description: desc,
    dueDate: dueDate,
    priority: priority,
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });

  // Update
  const updateItem = async (id) => {
    const { title, description, dueDate, priority } = values;

    const res = await fetch(`/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
      }),
    });

    if (res.status === 200) {
      window.alert("Successfully updated");
      console.log("Successfully updated");
      history.push("/");
    } else {
      window.alert("Unsuccessful update");
      console.log("Unsuccessful update");
    }
  };

  useEffect(() => {
    console.log(ele.acknowledgment);
  }, []);

  return (
    <div className="Update">
      <form
        className="sideUpdate"
        action="/update/:id"
        style={{
          margin: "auto",
          backgroundColor: "rgba(15, 14, 14, 0.7)",
          borderRadius: 20,
          marginBottom: 40,
        }}
        onSubmit={handleSubmit}
      >
        <div className="sideUpdateCont">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Update Title
          </label>
          <input
            style={{ width: 500 }}
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Update Description
            </label>
            <textarea
              style={{ width: 500 }}
              className="form-control"
              rows="3"
              placeholder="Description"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>

            <div>
              <label className="form-label">Update Due Date</label>
              <input
                style={{ width: 500 }}
                type="date"
                className="form-control"
                name="dueDate"
                id="dueDate"
                value={values.dueDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="radio">
              <label>Priority: </label>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="1"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                />
                High
              </div>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="2"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                />
                Medium
              </div>
              <div className="radioComp">
                <input
                  type="radio"
                  name="priority"
                  value="3"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                />
                Low
              </div>
            </div>
            <input
              style={{ width: 500 }}
              type="submit"
              value="Update"
              className="bttn"
              onClick={() => {
                updateItem(id);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default SideUpdate;
