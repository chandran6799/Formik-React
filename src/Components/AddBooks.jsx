import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const AddBooks = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      title: "",
      author: "",
      description: "",
      publication: "",
      publisher: "",
      website: "",
      page: "",
    },
  ]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author name is required"),
    description: Yup.string().required("Description is required"),
    publication: Yup.string().required("Publication field is required"),
    publisher: Yup.string().required("Publisher field is required"),
    website: Yup.string().required("Website link  is required"),
    page: Yup.number().required("page number is required"),
  });

  const formik = useFormik({
    initialValues: { data },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .post(`https://6651db1b20f4f4c44278edc6.mockapi.io/api/user/`, values) 
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      navigate("/bookDetails");
    },
  });

  return (
    <div>
      <div>
        <h4
          style={{
            fontFamily: "Protest Riot, sans-serif",
            fontSize: "2rem",
            color: "brown",
            fontStyle: "normal",
            textAlign: "center",
            marginBottom: "60px",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          Add New Books
        </h4>
      </div>
      <form onSubmit={formik.handleSubmit} className="container">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  Title*
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title Name"
                    aria-label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.title}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  Author Name*
                  <input
                    className="form-control"
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    aria-label="Author Name"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.author}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  {" "}
                  Description*
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Description"
                    aria-label="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.description}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  {" "}
                  Publication*
                  <input
                    type="text"
                    className="form-control"
                    name="publication"
                    placeholder=" Publication"
                    aria-label="publication"
                    value={formik.values.publication}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.publication}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  Publisher*
                  <input
                    type="text"
                    className="form-control"
                    name="publisher"
                    placeholder="Publisher"
                    aria-label="Publisher"
                    value={formik.values.publisher}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.publisher}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  Website*
                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    placeholder="Website Link"
                    aria-label="Website Link"
                    value={formik.values.website}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.website}</div>
            </div>

            <br />
            <div>
              <label>
                <h6 style={{ color: "blue" }}>
                  {" "}
                  Pages*
                  <input
                    type="number"
                    className="form-control"
                    name="page"
                    placeholder="Pages"
                    aria-label="pages"
                    value={formik.values.page}
                    onChange={formik.handleChange}
                  />
                </h6>
              </label>
              <br />
              <div className="text-danger">{formik.errors.page}</div>
            </div>

            <br />
          </div>
        </div>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <button
            type="submit"
            style={{
              marginBottom: "20px",
              textAlign: "center",
              backgroundColor: "green",
              color: "black",
              borderRadius: "10px",
              border: "none",
              padding: "10px",
              margin: "5px",
              marginBottom:"10px"
            }}
          >
            Add New Books
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;