import logo from "../assets/react.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav  className="mb-20 flex items center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="mx-2 w-10" /> */}
      </div>
      <div className = "m-8 flex items-center justify-center gap-4 text-2xl text-neutral-200 ">
        <a href="https://www.linkedin.com/in/ang-wei-sheng/"><FaLinkedin className="hover:text-neutral-500"/></a>
        <a href="https://github.com/angweisheng"><FaGithub className="hover:text-neutral-500"/></a>
        
      </div>
    </nav>
  ) 
}

export default Navbar