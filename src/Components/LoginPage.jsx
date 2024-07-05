import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Input from "./Input";
import { FormikInput } from "./Input";
function LoginPage() {
  function callLoginApi(values){
    console.log("sending data",values.email,values.password)
  }
  const schema=Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });
//  const {values,handleSubmit,handleChange,errors,touched,handleBlur,isValid}=useFormik({
//     initialValues:{
//       email:"",
//       password:"",
//     },
//     onSubmit:callLoginApi,
//     validationSchema:schema,
//     validateOnMount:true,
//   })
const InitialValues={
        email:"",
        password:"",
      }
 
  return (
    <>
     
    
      <div className="max-h-screen flex items-center  justify-center ">
      <Formik initialValues={InitialValues} onSubmit={callLoginApi}  validationSchema={schema} validateOnMount>
        <Form  className="flex flex-col justify-center items-center ">
          <img
            className="max-w-52"
            src="https://st2.depositphotos.com/6628792/9630/v/950/depositphotos_96308306-stock-illustration-shopping-cart-icon.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
         <FormikInput  type="email" name="email"  placeholder="Enter Username"   />
         <FormikInput  type="password" name="password" placeholder="Password"   />
         </div>
          <button type="submit"  class="bg-gray-400 disabled:bg-gray-100 mt-4 hover:bg-gray-500 w-64 px-16 py-2">
              Login
            </button>
            <div className=" text-md flex fles-row justify-end w-64">
            
                <Link to='/ForgotPassword'><p className="text-purple-700 ">Forgot Password?</p></Link>
            </div>
            <p className='mt-8 text-xl'>Don't have an account? <Link to='/signUp'><span className="text-purple-700">Signup</span></Link></p>
        </Form>
        </Formik>
      </div>
    </>
  );
}

export default LoginPage;
