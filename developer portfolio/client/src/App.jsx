import { useState } from "react";
import profile from "./assets/pic.jpeg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";

export default function App() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    console.log(error);

  }

};

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Node.js",
    "TensorFlow",
    "Tailwind CSS",
    "MongoDB",
    "Git & GitHub",
  ];


const projects = [
  {
    title: "AI-Teacher Chatbot",
    image: project1,
    link: "https://github.com/Itzshambhav/AI-Teacher-Chatbot",

    desc: `
• LangChain + LLaMA 3.1 based AI chatbot

• Interactive Streamlit interface

• Conversational memory integration

• Hugging Face model support
`,
  },

  {
    title: "Video Cryptography",
    image: project2,
    link: "https://github.com/Itzshambhav/Video-Cryptography-",

    desc: `
• Secure Java Spring Boot application

• REST API development

• JUnit & Mockito testing

• Docker deployment
`,
  },

  {
    title: "Image Denoising System",
    image: project3,
    link: "https://github.com/Itzshambhav/Image-Diagonising",

    desc: `
• DnCNN deep learning model

• FastAPI backend integration

• Image preprocessing optimization

• Computer vision implementation
`,
  },
];



  return (
    <div className="bg-[#020617] text-white overflow-hidden min-h-screen relative">

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#020617]/70 border-b border-slate-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
            Shambhav Kumar
          </h1>

          <div className="hidden md:flex gap-10 text-lg text-slate-300">

            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 pt-40 pb-20 gap-20 relative z-10"
      >

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="text-cyan-400 text-2xl mb-4 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

            Shambhav Kumar

          </h1>

          <h2 className="text-3xl md:text-4xl text-slate-300 mb-8 font-semibold">

            AI Engineer & Full Stack Developer

          </h2>

          <p className="text-slate-400 text-lg leading-9 mb-10">

            Passionate about Artificial Intelligence,
            Machine Learning, Full Stack Development,
            and building intelligent scalable applications
            with modern technologies.

          </p>

          <div className="flex flex-wrap gap-5">

            <a href="https://github.com/Itzshambhav?tab=repositories">

              <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30">

                View Projects

              </button>

            </a>

            <a
              href="/ShambhavKumarCV.pdf"
              download
            >

              <button className="border border-slate-700 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300">

                Download Resume

              </button>

            </a>

          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-[5px] border-cyan-400 shadow-2xl shadow-cyan-500/30 hover:scale-105 transition duration-500">

            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-8 md:px-20 py-28 relative z-10"
      >

        <h2 className="text-5xl font-black text-cyan-400 mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="
              group
              bg-slate-900/80
              border border-slate-700
              rounded-3xl
              p-10
              text-center
              backdrop-blur-md
              hover:border-cyan-400
              hover:-translate-y-3
              hover:shadow-2xl
              hover:shadow-cyan-500/20
              transition-all duration-300
              "
            >

              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">

                {skill}

              </h3>

            </div>

          ))}

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 md:px-20 py-28 relative z-10"
      >

        <h2 className="text-5xl font-black text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
              bg-slate-900/70
              border border-slate-800
              rounded-[32px]
              overflow-hidden
              backdrop-blur-xl
              hover:border-cyan-400
              hover:-translate-y-4
              hover:shadow-2xl
              hover:shadow-cyan-500/20
              transition-all duration-500
              "
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>

                <div className="text-slate-400 leading-8 whitespace-pre-line mb-8">

                  {project.desc}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">

                    View Project

                  </button>

                </a>

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* Contact */}
<section
  id="contact"
  className="px-8 md:px-20 py-28 relative z-10"
>

  <div className="bg-slate-900/70 border border-slate-800 rounded-[40px] p-14 backdrop-blur-xl hover:border-cyan-400 transition duration-500">

    <h2 className="text-5xl font-black text-cyan-400 mb-8 text-center">

      Let's Connect

    </h2>

    <p className="text-slate-400 text-xl leading-9 mb-10 max-w-3xl mx-auto text-center">

      Open to internships, collaborations,
      freelance opportunities, and innovative
      AI/software development projects.

    </p>

    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto flex flex-col gap-6"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="6"
        className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
      >

        Send Message

      </button>

    </form>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <a
        href="https://www.linkedin.com/in/shambhav-kumar-2aaa30212/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">

          LinkedIn

        </button>

      </a>

      <a
        href="https://github.com/Itzshambhav"
        target="_blank"
        rel="noopener noreferrer"
      >

        <button className="border border-slate-700 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300">

          GitHub

        </button>

      </a>

    </div>

  </div>
</section>

    </div>
  );
}
