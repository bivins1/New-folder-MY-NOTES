import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "@/app/auth";
import Navbar from "@/app/component/Navbar";

const SignInPage = () => {

    return (

        <main className="h-dvh">
            <Navbar />
            <div className="flex items-center justify-center  md:py-16 py-10">
                <div className="bg-white shadow-lg rounded-lg w-3xl md:w-md p-8 space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Sign in to <span className="text-amber-500 text-3xl font-bold">My Notes</span>
                        </h1>
                    </div>

                    <form
                        action={async () => {
                            "use server";
                            await signIn("google", { callbackUrl: "/createnotes" });
                        }}
                    >
                        <button className="w-full text-2xl text-gray-800 border py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition">
                            <FcGoogle size={24} />
                            Sign in with Google
                        </button>
                    </form>

                    <form
                        action={async () => {
                            "use server";
                            await signIn("github", { callbackUrl: "/createnotes" });
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
                </div>
            </div>

        </main>
    );
};

export default SignInPage; 