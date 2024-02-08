"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";
import Link from "next/link";

const COURSES = [
  {
    url: 'https://www.open.edu.au/',
    img: "/image/projects/1.png",
    tag: "React/RESTful API/WebRTC/Node/Responsive Design/Next.js",
    title: "Online Education Platform",
    label: "from $199",
    desc: "As a Senior Frontend Engineer, I played a pivotal role in architecting and implementing the frontend components using React.js, an industry-leading JavaScript library known for its modular and reusable component architecture.",
  },
  {
    url: 'https://broker-bewertungen.de/',
    img: "/image/projects/2.png",
    tag: "React/MongoDB/Express/Node/RESTful API",
    title: "broker-bewertungen",
    label: "from $99",
    desc: "Developed a Germany-based article website using the MERN stack framework in my role as a full-stack developer.",
  },
  {
    url: 'https://www.zalando-lounge.ch/#/',
    img: "/image/projects/3.png",
    tag: "React/Typescript/MongoDB/Node/Express",
    title: "Online-Outlet Switzerland",
    label: "from $499",
    desc: "Implemented UX/UI design as a Frontend Developer. Collaborated closely with backend developers and delivered successful project.",
  },
  {
    url: 'https://burningsound.net/',
    img: "/image/projects/4.png",
    tag: "React/Typescript/MongoDB/Node/Express",
    title: "Booking Website",
    label: "from $49",
    desc: "Contributed Booking website as a Senior Frontend Engineer. Implemented frontend with Figma using React.",
  },
  {
    url: 'https://nldc.com/',
    img: "/image/projects/5.png",
    tag: "React/Typescript/MongoDB/Node/Express",
    title: "New Life Drama Company",
    label: "from $99",
    desc: "This site is traveling site so I developed frontend using React.",
  },
  {
    url: 'https://www.coastlinetvinstalls.com/',
    img: "/image/projects/6.png",
    tag: "React/Typescript/MongoDB/Node/Express",
    title: "Marketing Website",
    label: "from $299",
    desc: "This is Marketing site from USA. I delivered project successfuly as a Frontend developer. I collaborated closely with backend developers and stakeholders.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          My Past Projects
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Skilled in creating responsive, user-friendly interfaces and optimizing performance
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
