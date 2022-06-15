import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = ({ categories }) => {
  return (
    <div className="mt-12 mb-16">
      <Link href="/">
        <a>
          <motion.h1
            animate={{ fontSize: "40px" }}
            transition={{ type: "spring", stiffness: 150 }}
            className="mx-4 text-center font-kanit font-bold tracking-wide"
          >
            <span className="mr-1 text-primary text-3xl lg:text-5xl">
              Sayan
            </span>
            <span className="text-3xl lg:text-5xl">Munshi</span>
          </motion.h1>
        </a>
      </Link>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ fontSize: "30px", lineHeight: "36px", opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center font-light"
      >
        <div className="flex text-xl sm:text-2xl lg:text-4xl">
          <li className="mr-2 font-light">Developer</li> |
          <li className="ml-2 mr-2 font-light">Otaku</li> |
          <li className="ml-2 font-light">Traveller</li>
        </div>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center my-6 flex-wrap"
      >
        {categories.map((category) => {
          return (
            <motion.li
              whileHover={{ scale: 1.2, color: "#ff0000" }}
              className="mx-3 uppercase text-md font-medium cursor-pointer py-2"
              key={category.id}
            >
              <Link href={`/category/${category.attributes.name}`}>
                <a className="text-sm sm:text-base lg:text-xl">
                  {category.attributes.name}
                </a>
              </Link>
            </motion.li>
          );
        })}
        <motion.li
          whileHover={{ scale: 1.2, color: "#ff0000" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer py-2"
        >
          <Link href="/contact">
            <a className="text-sm sm:text-base lg:text-xl">Contact</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "#ff0000" }}
          className="mx-3 uppercase text-md font-medium cursor-pointer py-2"
        >
          <Link href="/subscribe">
            <a className="text-sm sm:text-base lg:text-xl">Subscribe</a>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Header;
