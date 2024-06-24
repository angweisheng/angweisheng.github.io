import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch!</h1>

      <div className="text-center tracking-tighter">
        <div className="m-6 flex items-center justify-center gap-4 text-2xl text-neutral-200">
          <a href="https://www.linkedin.com/in/ang-wei-sheng/">
            <FaLinkedin className="hover:text-neutral-500"/>
          </a>
          <a href="https://github.com/angweisheng">
            <FaGithub className="hover:text-neutral-500"/>
          </a>
        </div>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
