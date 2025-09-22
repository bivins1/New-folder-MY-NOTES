import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white flex flex-col items-center justify-center px-4 py-15">
      <h1 className="text-4xl font-extrabold text-center mb-8">About <span className="text-amber-500">Us</span></h1>

      <div className="text-lg space-y-6 max-w-3xl text-center text-gray-800">
        <p>
          **MyNotes** is more than just a place to jot down thoughts—it's a note-taking app designed to give you a clean, minimalist experience. We believe that the best tools are the ones that get out of your way. That's why MyNotes helps you capture ideas anytime, anywhere, without unnecessary clutter. Whether you’re organizing thoughts, saving reminders, or planning projects, we make it quick and effortless to keep track of what matters most.
        </p>

        <p>
          We built MyNotes using modern web technologies like **React**, **Next.js**, and **TailwindCSS**. We also integrated libraries such as **Formik** and **Yup** for smooth form validation, and **Auth.js** for secure authentication. We deeply appreciate the open-source community and the developers who make these tools available.
        </p>

        <p>
          Special thanks to my supervisor, **Mr. Tochukwu at EarlyCode Limited**, whose guidance and feedback were invaluable in designing and improving this project.
        </p>

        <p>
          MyNotes is completely free to use and does not offer paid subscriptions. Our mission is to provide a lean, useful, and accessible note-taking solution that grows with its users. No ads, no paywalls—just a simple tool to help you stay organized.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;