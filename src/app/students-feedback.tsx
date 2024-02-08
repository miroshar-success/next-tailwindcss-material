"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "Oskar is awesome as a Frontend Developer. He always delivered task in define time.",
    client: "Jessica Devis",
    title: "CTO @ Sapien Company.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "I have worked with Oskar at this time. Oskar always collaborated closely with me and supported me. And I am very happy to get opportunity with him.",
    client: "Linde Michel",
    title: "Backend Developer @ Angry Nerd Company.",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "I think Oskar is Senior frontend developer with high skill in React. He is talent in this. He implemented all requirements correctly and perfectly and users are satisfied with interface.",
    client: "Misha Stam",
    title: "Project Manager @ Insure DAO.",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What My Clients Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            My unwavering dedication to client satisfaction drives me to craft seamless user experiences and responsive interfaces that exceed expectations, ensuring that every project reflects the highest standards of quality and innovation.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
