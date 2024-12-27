"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Sheet Trigger */}
        <SheetTrigger
          className="flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/" onClick={handleLinkClick} className="text-4xl font-semibold">
              <h1>
                Ajay<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // Close the sheet on link click
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent "
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
