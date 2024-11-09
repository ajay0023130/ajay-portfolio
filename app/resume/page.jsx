"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me ",
  description:
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis libero veniam id dicta rem, asperiores, aliquam consectetur similique nisi ullam modi quia cupiditate dolor deleniti labore natus velit vel",
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
      fieldValue: " 3+ Years",
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
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis libero veniam id dicta rem, asperiores, aliquam consectetur similique nisi ullam modi quia cupiditate dolor deleniti labore natus velit vel",

  items: [
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
    {
      company: "Tech Solution Pvt Ltd",
      position: "Full stack devloper",
      duration: "2012- Present",
    },
  ],
};

// education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My  Education",
  description:
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis libero veniam id dicta rem, asperiores, aliquam consectetur similique nisi ullam modi quia cupiditate dolor deleniti labore natus velit vel",

  items: [
    {
      instition: "online course ",
      degree: " full satck web devlopment course",
      duration: "2024",
    },
    {
      instition: "online course ",
      degree: " full satck web devlopment course",
      duration: "2024",
    },
    {
      instition: "online course ",
      degree: " full satck web devlopment course",
      duration: "2024",
    },
    {
      instition: "online course ",
      degree: " full satck web devlopment course",
      duration: "2024",
    },
    {
      instition: "online course ",
      degree: " full satck web devlopment course",
      duration: "2024",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis libero veniam id dicta rem, asperiores, aliquam consectetur similique nisi ullam modi quia cupiditate dolor deleniti labore natus velit vel",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
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
      icon: <FaNodeJs />,
      name: "node.js",
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
      <p className="text-white/60">Lorem ipsum dolor sit.amet consectetur adipisicing elit </p>
 
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
                  <h3 className="text-4xl font-bold ">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto  md:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-4 md:gap-[30px] gap-4">
                  {skills.skillList.map((skill,index)=>{
                    return <li key={index} >
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

                  })}
                </ul>

              </div>
           
            </TabsContent>
            <TabsContent value="about" className=" w-full text-center md:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/60  mx-auto  md:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0 ">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex justify-center items-center md:justify-start gap-4 ">
                      <span className="text-white/60">
                        {item.fieldName}
                      
                      </span>
                      <span className="text-xl">
                        {item.fieldValue}
                      
                      </span>

                    </li>
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
