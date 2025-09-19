import React from "react";
import Image from "next/image";

function About() {

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-items-center bg-gradient-to-r from-white via-amber-50 to-white">

                <div className=" px-4 py-8 ">
                    <h1 className="text-2xl font-bold">
                        <span className="text-gray-800 opacity-60">About </span>
                        <span className="text-amber-500 opacity-70">My Notes</span>
                    </h1>

                    <h1 className="font-bold text-4xl text-gray-800 uppercase mb-5">
                        your personal online journal
                    </h1>

                    <Image
                        src="/How to Start an Emotional Journal (Even If You're Not Good with Words).jpg"
                        width={300}
                        height={300}
                        alt="Emotional journal"
                        className="rounded-2xl shadow-md "
                    />
                </div>



                <div className=" px-4 py-8">
                    <p className="text-3xl text-gray-800 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        pulvinar, nisi a scelerisque ullamcorper, justo est euismod magna,
                        fermentum convallis lacus nisi at erat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, natus.
                    </p> <Image
                        src="/How to Start an Emotional Journal (Even If You're Not Good with Words).jpg"
                        width={300}
                        height={300}
                        alt="Emotional journal"
                        className="rounded-2xl shadow-md "
                    />
                </div>




                <div className=" px-4 py-8">
                    <p className="text-3xl text-gray-800 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        imperdiet diam nec orci fringilla, nec bibendum lorem gravida. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum beatae, voluptatibus molestiae nemo aspernatur.
                    </p> <Image
                        src="/How to Start an Emotional Journal (Even If You're Not Good with Words).jpg"
                        width={300}
                        height={300}
                        alt="Emotional journal"
                        className="rounded-2xl shadow-md "
                    />
                </div>


                <div className=" px-4 py-10 col-span-1 md:col-span-2 text-center border-t border-b border-gray-300">
                    <h1 className="text-xl font-bold italic text-gray-800">
                        “Your mind deserves to rest too, so write.”
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">— CEO, My Notes</p>
                </div>



            </div>
        </div>

    )
}

export default About