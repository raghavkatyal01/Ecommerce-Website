import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "./Input";
import Input from "./Input";
function SignUp() {
  function saveDataToApi(values) {
    console.log(
      "Saving Data",
      values.fName,
      values.lName,
      values.email,
      values.password
    );
  }
  const schema = Yup.object().shape({
    fName: Yup.string().required("Required Field"),
    lName: Yup.string().required("Required Field"),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8),
    Confpassword: Yup.string().required("Required Field").min(8,"password not matched"),
  });
  // const {
  //   handleSubmit,
  //   handleChange,
  //   handleBlur,
  //   touched,
  //   handleReset,
  //   values,
  //   errors,
  // } = useFormik({
  //   initialValues: {
  //     fName: "",
  //     lName: "",
  //     email: "",
  //     password: "",
  //     Confpassword: "",
  //   },
  //   onSubmit: saveDataToApi,
  //   validationSchema: schema,
  // });
  const initialValues={
        fName: "",
        lName: "",
        email: "",
        password: "",
        Confpassword: "",
      };
  return (
    <>
      <div className="max-h-screen flex mt-20  justify-center ">
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={saveDataToApi}>
        <Form  
          className="flex flex-col gap-2  justify-center items-center "
        >
          <img
            className="max-w-40"
            src="https://st2.depositphotos.com/6628792/9630/v/950/depositphotos_96308306-stock-illustration-shopping-cart-icon.jpg"
            alt=""
          />
       
            <FormikInput type="text" placeholder="First Name" name="fName"/>
            <FormikInput type="text" placeholder="Last Name" name="lName"/>
            <FormikInput type="email" placeholder="Enter Username" name="email"/>
            <FormikInput type="password" placeholder="Password" name="password"/>
            <FormikInput type="password" placeholder="Re-Enter Password" name="Confpassword"/>
         
          <div className="w-64 flex justify-between">
            <button
              
              className="py-1 rounded-xl bg-gray-400 mt-2 hover:bg-gray-500 w-20 "
            >
              Reset
            </button>
            <button
              type="submit"
              className="py-1 rounded-xl bg-gray-400 mt-2 hover:bg-gray-500 w-20"
            >
              SignUp
            </button>
          </div>
          <p className="mt-4 text-xl">
            Already an user?{" "}
            <Link to="/login">
              <span className="text-purple-700"> Login</span>
            </Link>
          </p>
        </Form>
        </Formik>
      </div>
    </>
  );
}

export default SignUp;
