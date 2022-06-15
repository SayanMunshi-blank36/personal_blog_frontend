import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moment from "moment";
import Link from "next/link";

const CategoryFeaturedBlogs = ({ category, blogs }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });

      animation2.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.6,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
      animation2.start({
        opacity: 0,
      });
    }
  }, [inView]);

  const iterativeBlogs = blogs.slice(1);

  return (
    <div ref={ref} className="my-20 mx-auto w-11/12 lg:w-[58rem]">
      <motion.h2
        animate={animation}
        className="w-fit text-3xl lg:text-5xl font-extrabold text-secondary mb-4 border-b-4 border-b-secondary"
      >
        {category.attributes.name.toUpperCase()} BLOGS
      </motion.h2>
      <motion.p animate={animation2} className="mb-4 text-lg">
        {category.attributes.description}
      </motion.p>
      <motion.div
        animate={animation2}
        className="grid lg:grid-cols-2 gap-8 grid-cols-1"
      >
        <div>
          <a
            href={`/blog/${blogs[0].attributes.slug}`}
            className="mx-auto w-3/4 lg:mx-0 lg:w-full"
          >
            <Image
              src={`${blogs[0].attributes.cover.data.attributes.url}`}
              width={500}
              height={300}
              className="rounded-md mx-auto hover:opacity-95"
            />
          </a>
          <div className="mx-auto w-3/4">
            <p className="mt-4 text-base lg:text-xl text-accent font-bold border-2 border-accent w-fit px-1 rounded-lg">
              {category.attributes.name.toUpperCase()}
            </p>
            <a href={`/blog/${blogs[0].attributes.slug}`}>
              <h3 className="my-4 text-base lg:text-xl font-bold hover:underline cursor-pointer">
                {blogs[0].attributes.title.toUpperCase()}
              </h3>
            </a>
            <p className="text-sm lg:text-base">
              {blogs[0].attributes.description}
            </p>
            <p className="my-4 lg:text-base text-sm">
              {moment(blogs[0].attributes.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          {iterativeBlogs.map((blog) => {
            return (
              <div key={blog.id}>
                <a href={`/blog/${blog.attributes.slug}`}>
                  <Image
                    className="rounded-md hover:opacity-95"
                    src={`${blog.attributes.cover.data.attributes.url}`}
                    width={500}
                    height={300}
                  />
                </a>
                <p className="mt-2 text-xs lg:text-sm text-accent font-semibold w-fit px-1">
                  {category.attributes.name.toUpperCase()}
                </p>
                <a href={`/blog/${blog.attributes.slug}`}>
                  <h3 className="my-4 text-sm lg:text-base font-bold hover:underline cursor-pointer">
                    {blog.attributes.title.toUpperCase()}
                  </h3>
                </a>
                <p className="my-4 lg:text-base text-sm">
                  {moment(blog.attributes.createdAt).format("MMM DD, YYYY")}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.button
        animate={animation}
        className="btn btn-primary text-sm lg:text-base"
      >
        <Link href={`/category/${category.attributes.name}`}>
          <a>Read More {category.attributes.name} Blogs</a>
        </Link>
      </motion.button>
    </div>
  );
};

export default CategoryFeaturedBlogs;
