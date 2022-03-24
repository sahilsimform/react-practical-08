import React from "react";
import { ErrorMessage } from "formik";

const ErrorMessages = ({ name }) => {
  return (
    <div className="text-danger">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ErrorMessages;
