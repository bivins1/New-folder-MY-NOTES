"use client";
import React from "react";
import { useState } from "react";
import { FiMenu, FiX, FiPlus, FiTrash2, FiFolder } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { db } from '@/config/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { BiLoaderCircle } from "react-icons/bi";
import Link from "next/link";



function Createnote({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [processing, setProcessing] = useState(false);

  const welcomeText = "WELCOME TO MY NOTES";
  const colors = ["text-gray-800", "text-amber-500"];

  const formValidation = Yup.object({
    title: Yup.string().required("This is a required field"),
    note: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required")
  })

  const iv = {
    title: "",
    note: ""
  }

const handleSubmit = async (values, { resetForm }) => {
  console.log(values);

  setProcessing(true); // start spinner immediately

  try {
    const noteDetails = {
      authorId : session.user.uid,
      author: session.user.name,
      img: session.user.image,
      timestamp: serverTimestamp(),
      ...values
    }

    const docRef = await addDoc(collection(db, "Mynotes"), noteDetails)
    console.log("Document written with ID: ", docRef.id);
    resetForm()
    setDisplay(false) // hide modal after successful submission
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    setProcessing(false); // stop spinner no matter what
  }
}




  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside
        className={`bg-amber-50 text-gray-800 w-64 p-6 fixed md:static inset-y-0 left-0 z-50 
        transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`}
      >
        <div>
          <div className=" text-amber-500 text-3xl font-bold p-4 mb-8 rounded">
            MY NOTES
          </div>

          <div className="space-y-4 flex flex-col">
            <button onClick={() => setDisplay(!display)} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiPlus /> Create Notes </button>
             <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiTrash2 /> Trash </button>

             <Link href="/my-notes" >
               <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiFolder /> My Notes </button>
             </Link>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 md:mt-0">
          <button onClick={() => setDisplay(!display)} className="fixed bottom-8 right-8 md:bottom-8 md:right-8 bg-transparent text-gray-800 text-2xl p-4 rounded-full hover:bg-gray-800 hover:text-amber-50 transition">
            <FiPlus />
          </button>
        </div>
      </aside>

      {display && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 " onClick={() => setDisplay(false)}>
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3" 
          onClick={(e) => e.stopPropagation()}>
            <Formik initialValues={iv} validationSchema={formValidation} onSubmit={handleSubmit}>
              <Form className='space-y-5'>
                <div className="flex flex-col gap-2">
                  <Field name="title" placeholder="Note Title" className="outline-none border rounded-md border-gray-200 p-2 w-full" />
                  <ErrorMessage name='title' component={"p"} className='text-xs text-red-600' />
                </div>
                <div className="flex flex-col gap-2">
                  <Field name="note" as="textarea" placeholder="Note Content" className="outline-none border rounded-md border-gray-200 p-2 w-full" />
                  <ErrorMessage name='note' component={"p"} className='text-xs text-red-600' />
                </div>

                <button type='submit' className='bg-amber-500 text-white w-full rounded-md p-2 hover:bg-gray-800 transition-all duration-200 flex items-center justify-center' 
                disabled={processing}>
                  {
                    processing ? <BiLoaderCircle className=' animate-spin text-2xl text-white text-center' /> : "Create Note"
                  }
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-center p-8 md:ml-64 w-full">
        <h1 className="text-4xl font-bold mb-4 flex flex-wrap justify-center">
          {welcomeText.split("").map((letter, index) => (
            <span key={index} className={`${colors[index % colors.length]} px-1`}>
              {letter}
            </span>
          ))}
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-md flex flex-wrap justify-center items-center gap-1">
          Click on
          <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-200 text-gray-800 font-semibold">
            <FiPlus /> Create Notes
          </span>
          ln the side bar or the plus icon at the bottom to create a new note.
        </p>
      </main>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-4 left-4 md:hidden text-2xl text-amber-500"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
}


export default Createnote 