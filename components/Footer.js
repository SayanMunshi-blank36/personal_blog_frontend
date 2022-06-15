import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mx-auto w-11/12 lg:w-[58rem] text-center mb-8">
      <h2 className="text-lg lg:text-2xl mb-4 text-primary">
        Social ID: <span className="text-secondary font-bold">@blank36</span>
      </h2>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-2xl lg:text-4xl mr-2 text-primary cursor-pointer"
        >
          <a
            href="https://twitter.com/blank_36"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="hover:scale-105 transition-all hover:text-secondary" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-2xl lg:text-4xl mr-2 text-primary cursor-pointer"
        >
          <a
            href="https://www.instagram.com/sayanmunshi36/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:scale-105 transition-all hover:text-secondary" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-2xl lg:text-4xl mr-2 text-primary cursor-pointer"
        >
          <a
            href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:scale-105 transition-all hover:text-secondary" />
          </a>
        </motion.div>
      </div>
      <p className="text-primary text-center my-10 text-base lg:text-xl">
        Thanks for Visiting !
      </p>
    </div>
  );
};

export default Footer;
