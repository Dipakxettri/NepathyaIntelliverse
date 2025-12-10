import React from "react";
import { Github, Phone, Mail } from "lucide-react";

// Team Members Data
const team = [
  {
    name: "Livesh Jha",
    role: "Team Lead",
    github: "https://github.com/",
    phone: "tel:+9779800000000",
    email: "mailto:example1@mail.com",
  },
  {
    name: "Shittal Bashyal",
    role: "AI Engineer",
    github: "https://github.com/sittal-basyal",
    phone: "tel:+9779800000001",
    email: "mailto:example2@mail.com",
  },
  {
    name: "Sandesh Aryal",
    role: "AI Engineer",
    github: "https://github.com/Sandesh-91",
    phone: "tel:+9779800000002",
    email: "mailto:example3@mail.com",
  },
  {
    name: "Deepak Ghimire",
    role: "AI Engineer",

    github: "https://github.com/Dipakxettri",
    phone: "tel:+9779800000003",
    email: "mailto:example4@mail.com",
  },
  {
    name: "Rajiv Chaudhary",
    role: "AI Engineer",

    github: "https://github.com/Geeky-Rajiv27",
    phone: "tel:+9779800000004",
    email: "mailto:example5@mail.com",
  },
  {
    name: "Siddheshwar Gupta",
    role: "AI Engineer",

    github: "https://github.com/Ishwar-gupta",
    phone: "tel:+9779800000005",
    email: "mailto:example6@mail.com",
  },
  {
    name: "Gaurav Gautam",
    role: "AI Engineer",

    github: "https://github.com/gauravgautam6",
    phone: "tel:+9779800000006",
    email: "mailto:example7@mail.com",
  },
  {
    name: "Samip Sharma",
    role: "AI Engineer",

    github: "https://github.com/",
    phone: "tel:+9779800000007",
    email: "mailto:example8@mail.com",
  },
  {
    name: "Rohit Neupana",
    role: "AI Engineer",

    github: "https://github.com/rohit-496",
    phone: "tel:+9779800000008",
    email: "mailto:example9@mail.com",
  },
  {
    name: "Puskar Thapa",
    role: "AI Engineer",

    github: "https://github.com/",
    phone: "tel:+9779800000009",
    email: "mailto:example10@mail.com",
  },
  {
    name: "Anmol Thaiba",
    role: "AI Engineer",
    github: "https://github.com/",
    phone: "tel:+9779800000010",
    email: "mailto:example11@mail.com",
  },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* --- LEFT SIDE TEXT --- */}
        <div className="md:col-span-1">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are a passionate group of developers and researchers working together to build intelligent solutions. Our team is driven by
            innovation, creativity, and a deep commitment to excellence.
          </p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-violet-400 transition-all"
            >
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h2 className="mt-4 text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>

              {/* Icons */}
              <div className="flex justify-center gap-5 mt-5">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
                  <Github size={22} />
                </a>
                {/* <a href={member.phone} className="hover:text-cyan-300">
                  <Phone size={22} />
                </a> */}
                <a href={member.email} className="hover:text-green-300">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}