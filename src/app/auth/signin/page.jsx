'use client';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "@/app/auth";
import auth from "@/app/auth";

// const validationSchema = Yup.object({
//   email: Yup.string().required(
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Email is required!
//       </span>
//     ).email(
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Please enter a valid email address!
//       </span>
//     ),
//   password: Yup.string()
//     .required(
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password is required!
//       </span>
//     ).min(
//       8,
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password must be at least 8 characters!
//       </span>
//     ).matches(/[a-z]/,
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password must contain at least one lowercase letter! 
//       </span>
//     ).matches(/[A-Z]/,
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password must contain at least one uppercase letter!
//       </span>
//     ).matches(/[0-9]/,
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password must contain at least one number!
//       </span>
//     ).matches(/[@$!%*?&]/,
//       <span className="flex items-center gap-1 text-red-600">
//         <FaExclamationCircle /> Password must contain at least one special character!
//       </span>
//     ),
// });

const page = async () => {
  const session = await auth()
  console.log(session);
}

const signInPage = () => {
  // const initialValues = { email: "", password: "" };
  // const handleSubmit = async (values) => {
  //   console.log(values);
  // };
  // initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}
  return (
    <main className="flex items-center justify-center bg-gradient-to-b from-white via-amber-50 to-white                     md:py-16 py-10 ">
      <Formik >
        <Form className="bg-white shadow-lg rounded-lg w-3xl md:w-md p-8 space-y-6 ">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              Sign in to <span className="text-amber-500 text-3xl font-bold">My Notes</span>
            </h1>
          </div>

          {/* <div>
            <label className="block text-2xl font-medium text-gray-700">Email Address</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border rounded-lg p-3 "
            />
            <ErrorMessage name="email" component="div" className="text-sm mt-1" />
          </div> */}

          {/* <div>
            <label className="block text-2xl font-medium text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full border rounded-lg p-3 "
            />
            <ErrorMessage name="password" component="div" className="text-sm mt-1" />
          </div> */}

          {/* <button
            type="submit"
            className="w-full text-2xl bg-amber-500 text-white py-2 rounded-lg cursor-pointer hover:bg-amber-600 transition"
          >
            Log In
          </button> */}

          {/* <p className="text-center text-2xl text-gray-600">or</p> */}

          <form
            action={async () => {

              await signIn("google");
            }}
          >
            <button className="w-full text-2xl text-gray-800 border py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FcGoogle size={24} />
              Sign in with Google
            </button>
          </form>

          <form
            action={async () => {

              await signIn("github");
            }}
          >
            <button className="w-full text-2xl text-gray-800 border py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FaGithub size={24} />
              Sign in with GitHub
            </button>
          </form>

          <p className="text-center text-2xl mt-4 text-gray-800">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-amber-500 hover:underline">
              Sign up
            </Link>
          </p>
        </Form>
      </Formik>
    </main>
  );
};

export default signInPage;
