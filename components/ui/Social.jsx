import Link from "next/link";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socails = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ajay-babu-51740916a/",
    label: "LinkedIn profile of Ajay Babu",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/ajay0023130",
    label: "GitHub profile of Ajay Babu",
  },
  {
    icon: <FaHackerrank />,
    path: "https://www.hackerrank.com/profile/ajaybabu0046",
    label: "HackerRank profile of Ajay Babu",
  },
  {
    icon: <SiLeetcode />,
    path: "https://leetcode.com/u/ajaybabu0046/",
    label: "LeetCode profile of Ajay Babu",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socails.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          aria-label={item.label}
          className={iconStyles}
          target="_blank" // Optional: Open in a new tab
          rel="noopener noreferrer" // Recommended for security
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

