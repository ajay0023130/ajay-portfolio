"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Input, Textarea, Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 8267 93 2261" },
  { icon: <FaEnvelope />, title: "Email", description: "ajaybabu0046@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Noida Sector 62" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_3twl6zs", // Your EmailJS service ID
        "template_zax8c9o", // Your EmailJS template ID
        formData // Data to send

      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setIsLoading(false);
        },
        (error) => {
          console.error("Error:", error);
          alert("Error sending message. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="md:h-[54%] order-1 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, commodi? Non praesentium amet ipsa officiis natus
                eaque illum eveniet, qui, minus ullam ducimus voluptates dolorem
                unde consectetur rem accusantium nostrum?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>
              <Select onChange={handleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="API Development">API Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button type="submit" size="md" className="max-w-40">
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center md:justify-end order-2 xl:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
