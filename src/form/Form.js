import "./form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import postFormData from "../support/postFormData";

const Form = ({ className, submissionUrl, formField }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [responseCode, setResponseCode] = useState();
  const { register, handleSubmit, reset } = useForm();

  if (!formField.length) {
    return null;
  }

  const onSubmit = (userData) => {
    postFormData(userData, submissionUrl)
      .then((data) => {
        setResponseCode(data);
        setShowResponse(true);
        setTimeout(() => setShowResponse(false), 4000);
        reset();
      })
      .catch((err) => console.log(err));
  };

  const formFields = formField.map((data, index) =>
    FormField({ data, index, register })
  );

  const responseMessage =
    responseCode === 201 ? (
      <div className="response-message response-success">
        😎 Profile successfully created 😎
      </div>
    ) : (
      <div className="response-message response-failed">
        Sorry, User creation was not successful!
      </div>
    );

  return (
    <div className="form-wrapper">
      <form
        className={className}
        onSubmit={handleSubmit((userData) => onSubmit(userData))}
      >
        {formFields}
        <button type="submit">Submit</button>
      </form>
      {showResponse && responseMessage}
    </div>
  );
};

export default Form;
