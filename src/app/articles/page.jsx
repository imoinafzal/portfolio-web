"use client";

import React, { useRef } from "react";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../../public/articles-images/article-1.png";
import article2 from "../../../public/articles-images/article-2.jpg";
import article3 from "../../../public/articles-images/article-3.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "../../components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    imageRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imageRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden "
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark dark:border-light border-r-4
    border-b-4 dark:bg-dark dark:text-light sm:flex-col  "
    >
      <MovingImg title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start 
      sm:pl-0 xs:text-sm "
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ title, time, img, summary, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-light text-dark border border-solid border-dark rounded-2xl
    relative dark:bg-dark dark:text-light dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
        rounded-br-3xl bg-dark"
      />
      <Link
        href={link}
        target="_blank"
        className="full cursor-pointer rounded-lg overflow-hidden inline-block"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2
          className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg 
        "
        >
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

const Articles = () => {
  return (
    <>
    <TransitionEffect />
      <main
        className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden 
    dark:text-light text-dark"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16 ">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              link="/"
              img={article1}
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
          Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              link="/"
              img={article2}
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
          Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Mar 3, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article2}
              date="Mar 3, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article1}
              date="Mar 3, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="Mar 3, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article2}
              date="Mar 3, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article1}
              date="Mar 3, 2022"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
