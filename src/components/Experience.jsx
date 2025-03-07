import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center 
      justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 text-dark dark:text-light">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16
       "
      >
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]  "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Techanzy"
            companyLink="www.google.com"
            time="2023-2024"
            address="DHA Phase-8, Lahore"
            work="I was initially being hired as a MERN-stack developer specialising in frontend,
             but soon upskilled to the full stack."
          />
          <Details
            position="MERN-Stack Bootcamp"
            company="Knowledge Streams"
            companyLink="www.google.com"
            time="2023"
            address="Township, Lahore"
            work="I graduated after 3 months of studying at KS and got hands-on experience through
             many key projects. I immediately found a job as a MERN-Stack developer."
          />
          <Details
            position="Software Engineer"
            company="Metaverse"
            companyLink="www.google.com"
            time="2022-2023"
            address="UMT, Lahore"
            work="As a part of PIAIC, this course was designed to make the full-stack modern day
             developers using cutting-edge technologies."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
