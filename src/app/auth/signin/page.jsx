import React from "react";
import { Formik, Form,} from "formik";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/app/auth";

const SignInPage = () => {
 

  return (
    <main className="flex items-center justify-center bg-gradient-to-b from-white via-amber-50 to-white md:py-16 py-10">
      <Formik>
        <Form className="bg-white shadow-lg rounded-lg w-3xl md:w-md p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              Sign in to <span className="text-amber-500 text-3xl font-bold">My Notes</span>
            </h1>
          </div>

          <form
            action={async () => {
              await signIn("google", { callbackUrl: "/createnotes/create-notes" });
            }}
          >
            <button className="w-full text-2xl text-gray-800 border py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition">
              <FcGoogle size={24} />
              Sign in with Google
            </button>
          </form>

          <form
            action={async () => {
              await signIn("github", {  callbackUrl: "/createnotes/create-notes" });
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

export default SignInPage;
