"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,FaPython, FaAws } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me ",
  description:
    "I have been working as a full-stack developer, and I absolutely love it! In this role, I am responsible for building and maintaining both the frontend and backend of web applications, which I find incredibly exciting and rewarding.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ajay Babu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 82 6793 2261",
    },
    {
      fieldName: "Experience",
      fieldValue: " 4+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "ajaybabu0046@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "Agra U.P.",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avialabe",
    },
    {
      fieldName: "languages",
      fieldValue: "English,Hindi",
    },
  ],
};

// experince data

const experince = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "  With a strong background in development, I’ve honed my skills in creating efficient solutions and overcoming complex challenges. My expertise spans multiple technologies, and I am driven by the pursuit of excellence in every project I undertake.",

  items: [
    {
      company: "DigiPanda Consulting Pvt. Ltd",
      position: "Sr. Python FullStack Developer",
      duration: "May/2024 - Present",
    },
    {
      company: "The Tech Ravens",
      position: "Python FullStack Developer",
      duration: "Feb/2022 - Apr/2024",
    },
    {
      company: "Radiant Infonet Pvt. Ltd",
      position: "Python Developer",
      duration: "Apr/2021 - Jan/2022",
    },
    {
      company: "Radiant Infonet Pvt. Ltd",
      position: "Internship",
      duration: "Dec/2020 - Mar/2021",
    },
  
  
  ],
};

// education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My  Education",
  description:
    "I hold a Bachelor's degree in Computer Applications where I gained a solid foundation in software development and problem-solving. ",
  items: [
    {
      instition: "Dr. Bhim Rao Ambedkar University, Agra",
      degree: "Bachelor of Computer Application (BCA)",
      duration: "2017 - 2020",
    },
    {
      instition: "Mahendra Singh Inter College",
      degree: "Intermediate(XII)",
      duration: "2017",
    },
    {
      instition: "Mahendra Singh Inter College",
      degree: "HighSchool(X)",
      duration: "2015",
    },
    
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    " I have a strong foundation in web development, backend systems, and database management. My expertise lies in problem-solving, software design, and quickly adapting to new technologies, ensuring I can tackle diverse and challenging projects efficiently.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />, //python
      name: "Python",
    },
    {
      icon: <BiLogoDjango />, //django
      name: "Django",
    },
    {
      icon: < FaAws />,//aws
      name: "Aws",
    },
    {
      icon: <BiLogoPostgresql />, //django
      name: "Postgresql",
    },
    {
      icon: < BiLogoMongodb />,//aws
      name: "Mongodb",
    },

    
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container  mx-auto">
        {/* <h3 className="text-4xl">Why hire me?</h3>
      <p>Lorem ipsum dolor sit. </p>
      <p>amet consectetur adipisicing elit.</p> */}

        <Tabs
          defaultValue="about"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <h3 className="text-4xl text-white">Why hire me?</h3>
            <p className="text-white/60 text-sm">
            I bring strong technical skills, problem-solving passion, and a commitment to quality, delivering effective solutions and adapting to challenges.
            </p>

            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* // content */}
          <div className="min-h-[70vh] w-full ">
            {/* experince */}
            <TabsContent value="experience" className=" w-full">
              <div className="flex flex-col  gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experince.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {experince.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experince.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184x] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className=" w-full">
              <div className="flex flex-col  gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184x] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.instition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className=" w-full h-full">
              <div className="flex flex-col  gap-[30px] text-center md:text-left">
                <div>
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0 mt-6">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-4 md:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className=" w-full text-center md:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60  mx-auto  md:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center md:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
