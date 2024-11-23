"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8267 93 2261",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ajaybabu0046@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Noida Sector 62  ",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="md:h-[54%] order-1 xl:order:none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`} </h3>
              <p className="text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, commodi? Non praesentium amet ipsa officiis natus
                eaque illum eveniet, qui, minus ullam ducimus voluptates dolorem
                unde consectetur rem accusantium nostrum?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname " placeholder="Firstname" />
                <Input type="lasttname " placeholder="Lastname" />
                <Input type="email " placeholder="Email address" />
                <Input type="phone " placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Select a Service</SelectLabel>
                    <SelectItem value="est"> Web Development</SelectItem>
                    <SelectItem value="cst"> API Development</SelectItem>
                    <SelectItem value="mst"> UI/UX Designer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center md:justify-end order-2 xl:order-none mb-8 md:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] md:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px]" >{item.icon}</div>
                   
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
