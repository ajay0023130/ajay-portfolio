import Link from "next/link"
import {FaGithub,FaLinkedin,FaYoutube,FaHackerrank,} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Socails = [
    {
        icon: <FaLinkedin />, path:"https://www.linkedin.com/in/ajay-babu-51740916a/"
    },
    {
        icon: <FaGithub />, path:"https://github.com/ajay0023130"
    },
    {
        icon: <FaHackerrank />, path:"https://www.hackerrank.com/profile/ajaybabu0046"
    },
    {
        icon: <SiLeetcode />, path:"https://leetcode.com/u/ajaybabu0046/"
    },
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {Socails.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
   
    </div>
  )
}

export default Social
