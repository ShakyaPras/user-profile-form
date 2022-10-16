import "./userForm.css";
import { useState, useEffect } from "react";
import getFormData from "../support/getFormData";
import Form from "../form/Form";

const UserForm = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getFormData().then((data) => setFormData(data));
  }, []);

  const formField = [
    { name: "name", element: "INPUT", type: "text" },
    { name: "email", element: "INPUT", type: "email" },
    { name: "password", element: "INPUT", type: "password" },
    { name: "occupation", element: "SELECT", options: formData.occupations },
    { name: "state", element: "SELECT", options: formData.states },
  ];

  const submissionUrl = "https://frontend-take-home.fetchrewards.com/form";

  return (
    <Form
      className="user-form"
      submissionUrl={submissionUrl}
      formField={formField}
    />
  );
};

export default UserForm;
