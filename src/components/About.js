import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState("");

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/Login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  //Profile image adding functions
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Create a temporary URL for the preview image
    const imagePreview = URL.createObjectURL(file);
    setPreviewImage(imagePreview);
  };

  return (
    <>
      <div className="container emp-profile">
        <form method="GET" className="formProf">
          <div className="row rowProf">
            <div className="col-md-4">
              <div className="profile-img">
                {!previewImage && (
                  <img
                    className="imageprof"
                    // src={selectedImage}
                    src="https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
                    alt="user"
                  />
                )}
                {previewImage && (
                  <img
                    src={previewImage}
                    className="imageprof"
                    alt="Preview"
                    style={{ maxWidth: "300px" }}
                  />
                )}

                <input type="file" onChange={handleImageChange} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5 className="headProf">{userData.username}</h5>
                <h6>{userData.email}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>5/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      className="nav-link active aboutProf"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row rowProf">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p style={{ fontWeight: "bold" }}>Social Media Handles</p>
                <a href="http://">LinkedIn</a>
                <br />
                <a href="http://">Instagram</a>
                <br />
                <a href="http://">Facebook</a>
                <br />
              </div>
            </div>

            {/* right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label> User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.username}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label> Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.username}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>tulaskarakshad1@gmail.com</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label> Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>tulaskarakshad1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
