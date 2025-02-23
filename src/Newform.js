import React, { useState } from "react";

const FormComponent = () => {
  // 🔹 State to store detail form input values
  const [detailFormData, setDetailFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    password: "",
    confirmPassword: "",
  });

  // 🔹 State to store login form input values
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 🔹 State to store validation errors
  const [detailErrors, setDetailErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  // 🔹 State to store submitted data
  const [submittedDetailData, setSubmittedDetailData] = useState(null);
  const [submittedLoginData, setSubmittedLoginData] = useState(null);

  // 🔹 State to control form visibility
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // 🔹 Handle input change for both forms
  const handleChange = (e, formType) => {
    if (formType === "detail") {
      setDetailFormData({ ...detailFormData, [e.target.name]: e.target.value });
    } else {
      setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    }
  };

  // 🔹 Validation for Detail Form
  const validateDetailForm = () => {
    let errors = {};
    if (!detailFormData.name) errors.name = "Name is required";
    if (!detailFormData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detailFormData.email))
      errors.email = "Invalid email format";
    if (!detailFormData.phone) errors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(detailFormData.phone))
      errors.phone = "Phone must be 10 digits";
    if (!detailFormData.message) errors.message = "Message is required";
    if (!detailFormData.password) errors.password = "Password is required";
    else if (detailFormData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!detailFormData.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    else if (detailFormData.password !== detailFormData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setDetailErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 🔹 Validation for Login Form
  const validateLoginForm = () => {
    let errors = {};
    if (!loginFormData.username) errors.username = "Username is required";
    if (!loginFormData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginFormData.email))
      errors.email = "Invalid email format";
    if (!loginFormData.password) errors.password = "Password is required";
    else if (loginFormData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!loginFormData.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    else if (loginFormData.password !== loginFormData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 🔹 Handle form submission for Detail Form
  const handleDetailSubmit = (e) => {
    e.preventDefault();
    if (validateDetailForm()) {
      setSubmittedDetailData(detailFormData);
      setDetailFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        password: "",
        confirmPassword: "",
      });
      setDetailErrors({});
      setShowDetailForm(false);
    }
  };

  // 🔹 Handle form submission for Login Form
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      setSubmittedLoginData(loginFormData);
      setLoginFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoginErrors({});
      setShowLoginForm(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">React Form with Validation</h2>

      {/* 🔹 Toggle Buttons for Forms */}
      <div className="text-center mb-3">
        <button
          className={`btn ${showDetailForm ? "btn-danger" : "btn-success"} me-2`}
          onClick={() => setShowDetailForm(!showDetailForm)}
        >
          {showDetailForm ? "Hide Detail Form" : "Show Detail Form"}
        </button>

        <button
          className={`btn ${showLoginForm ? "btn-danger" : "btn-primary"}`}
          onClick={() => setShowLoginForm(!showLoginForm)}
        >
          {showLoginForm ? "Hide Login Form" : "Show Login Form"}
        </button>
      </div>

      {/* 🔹 Conditional Rendering of Detail Form */}
      {showDetailForm && (
        <form onSubmit={handleDetailSubmit} className="card p-4 shadow-lg mb-4">
          <h4 className="text-center">Detail Form</h4>
          {Object.keys(detailFormData).map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label text-capitalize">{field}</label>
              <input
                type={field.includes("password") ? "password" : "text"}
                className={`form-control ${detailErrors[field] ? "is-invalid" : ""}`}
                name={field}
                value={detailFormData[field]}
                onChange={(e) => handleChange(e, "detail")}
              />
              {detailErrors[field] && <div className="invalid-feedback">{detailErrors[field]}</div>}
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      )}

      {/* 🔹 Conditional Rendering of Login Form */}
      {showLoginForm && (
        <form onSubmit={handleLoginSubmit} className="card p-4 shadow-lg">
          <h4 className="text-center">Login Form</h4>
          {Object.keys(loginFormData).map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label text-capitalize">{field}</label>
              <input
                type={field.includes("password") ? "password" : "text"}
                className={`form-control ${loginErrors[field] ? "is-invalid" : ""}`}
                name={field}
                value={loginFormData[field]}
                onChange={(e) => handleChange(e, "login")}
              />
              {loginErrors[field] && <div className="invalid-feedback">{loginErrors[field]}</div>}
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      )}

      {/* 🔹 Display Submitted Data */}
      {submittedDetailData && (
        <div className="mt-4 alert alert-success">
          <h4>Submitted Detail Data:</h4>
          <pre>{JSON.stringify(submittedDetailData, null, 2)}</pre>
        </div>
      )}
      {submittedLoginData && (
        <div className="mt-4 alert alert-info">
          <h4>Submitted Login Data:</h4>
          <pre>{JSON.stringify(submittedLoginData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
