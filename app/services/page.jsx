"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesList = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites tailored to your needs, ensuring optimal performance, scalability, and an engaging user experience.",
    href: "",
  },
  {
    num: "02",
    title: "API Development",
    description:
      "Designing robust, secure, and scalable APIs that enable seamless communication between systems and applications, ensuring reliability and performance.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces and exceptional user experiences that prioritize usability, aesthetics, and accessibility, enhancing user satisfaction",
    href: "",
  },
  {
    num: "04",
    title: "Devops Services",
    description:
      "Streamlining development workflows with efficient CI/CD pipelines, cloud integration, and system monitoring.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-16 md:py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesList.map((service, index) => (
            <div key={index} className="flex flex-col justify-center gap-4 group">
              <div className="w-full flex justify-between items-center ">
                <span className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</span>
                <Link href={service.href} className="w-[45px] h-[45px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl   " />
                </Link>
              </div>
              <h2 className="text-[38px] font-bold leading-none text-white  group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full " >

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
