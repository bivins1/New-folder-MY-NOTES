import React from "react";


function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white flex flex-col items-center justify-center px-4 py-15">
      <h1 className="text-4xl font-extrabold text-center mb-8">About <span className="text-amber-500">Us</span></h1>

      <div className="text-lg space-y-6 max-w-3xl text-center text-gray-800">
        <p>
          MyNotes is a simple and convenient note-taking app designed to help you capture
          ideas anytime, anywhere. Whether you’re organizing thoughts, saving reminders,
          or planning projects, MyNotes makes it quick and effortless to keep track of what matters most.
        </p>

        <p>
          We built MyNotes using modern web technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>TailwindCSS</strong>.  
          We also integrated libraries such as <strong>Formik</strong> and <strong>Yup</strong> for smooth form validation, and  
          <strong>Auth.js</strong> for secure authentication. We deeply appreciate the open-source community and the developers  
          who make these tools available.
        </p>

        <p>
          Special thanks to my supervisor, <strong>Mr. Tochukwu at EarlyCode Limited</strong>, whose guidance and feedback  
          were invaluable in designing and improving this project.
        </p>

        <p>
          MyNotes is completely free to use and does not offer paid subscriptions.  
          Our mission is to provide a lean, useful, and accessible note-taking solution  
          that grows with its users. No ads, no paywalls—just a simple tool to help you stay organized.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
