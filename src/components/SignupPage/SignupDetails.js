import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import "yup-phone";
import "./Signup.css";

import { signupUser } from "../Redux/Actions/Actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import ErrorMessages from "./ErrorMessages";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const SignupDetails = ({ signUp }) => {
  const fileRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    image: null,
  };

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(5, "Must be at least 5 characters")
      .max(15, "Must be 15 characters or less")
      .required("Name Required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(20)
      .required("Email is required"),
    phoneNo: Yup.string()
      .phone("IN", "Invalid phone number")
      .required("Phone Number Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is Required"),
    image: Yup.mixed()
      .nullable()
      .required("Photo is Required")
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => !value || (value && value.size <= 2 * Math.pow(1024, 2))
      )
      .test(
        "FILE_FORMAT",
        "Uploaded File is not supported",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
  });
  const onSubmitSend = (values, props) => {
    console.log(values);
    dispatch(signupUser(values));
    history.push("/home", { state: values.file });
  };

  return (
    <Formik
      validationSchema={validate}
      initialValues={initialValues}
      onSubmit={onSubmitSend}
    >
      {({ values, setFieldValue }) => (
        <div>
          <h1 className="my-1 font-weight-bold-display-4">Sign Up </h1>
          <Form>
            <div>
              <Field>
                {({ form }) => {
                  const { setFieldValue } = form;
                  return (
                    <>
                      <input
                        type="file"
                        hidden
                        ref={fileRef}
                        onChange={(event) => {
                          setFieldValue("image", event.target.files[0]);
                        }}
                      />

                      <div className="Upload-btn">
                        <p
                          onClick={() => {
                            fileRef.current.click();
                          }}
                        >
                          Photo +
                        </p>
                        <ErrorMessages name="image" />
                      </div>
                      <br />
                    </>
                  );
                }}
              </Field>
            </div>
            <TextField label="Name" name="name" type="text" />
            <ErrorMessages name="name" />
            <TextField label="Email" name="email" type="text" />
            <ErrorMessages name="email" />
            <TextField label="Phone No" name="phoneNo" type="number" />
            <ErrorMessages name="phoneNo" />
            <TextField label="Password" name="password" type="password" />
            <ErrorMessages name="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <ErrorMessages name="confirmPassword" />
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
            <button className="btn btn-danger mt-3 mx-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignupDetails;
