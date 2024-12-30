"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import StateComponent from "@/components/ui/StateComponent";
import { FiDownload } from "react-icons/fi";

const Homepage = () => {
  const handleDownload = () => {
    // Triggering the download programmatically
  

    const pdfPath = 'assets/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'ajay_babu_full_developer_3+years_experience.pdf';
    link.click();
  };
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left">
            <h1 className="h1">
              {`Hello I’m`} <br />
              <span className="text-accent">Ajay Babu</span>
            </h1>
            <span className="text-xl order-2 md:order-none mt-10"> Sr. Python Fullstack Developer</span>
            <p className="max-w-[500px] mb-9 mt-2 text-white/90">
            I excel in crafting elegant digital experiences and I am proficient in various programming languages and modern  technologies.
            </p>

            {/* Button and Social Icons */}
            <div className="flex flex-col md:flex-row items-center gap-8">
            
      <Button onClick={handleDownload} variant="outline" size="lg" className="uppercase flex items-center gap-2">
        <span >Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
   
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0"><Photo /></div>
        </div>

        <div>
          <StateComponent />
        </div>

      </div>
    </section>
  );
};

export default Homepage;
