"use client";
import CountUp from "react-countup";

const numStates = [
    {
        num: 4,
        text: "Years of Experience",
    },
    {
        num: 20,
        text: "Projects Completed",
    },
    {
        num: 8,
        text: "Technologies Mastered",
    },
    {
        num: 500,
        text: "Code Commits",
    },
];

const StateComponent = () => {
  return (
    <section className="pt-4 pb-12 md:pt-0 md:mb-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-6 max-w-[80vw] mx-auto md:grid-cols-4 md:max-w-none">
                {numStates.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center text-center md:justify-start">
                        <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2} 
                            className="text-4xl md:text-6xl font-extrabold text-white" 
                        />
                        <p className="leading-snug text-white/80 text-sm mt-2 ">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default StateComponent;
