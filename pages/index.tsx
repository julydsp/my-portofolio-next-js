import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import RootLayout from "./layout";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profile1 from "@/public/profile-1.png";
import profile2 from "@/public/profile-2.png";
import profile3 from "@/public/profile-3.png";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.03, // Waktu delay per huruf
    },
  }),
};

const sentence = {
  text: "Hi, my name is",
  style: "text-xs md:text-md text-[#8892B0] ",
};
const name = {
  text: "July Dwi Saputra.",
  style: "text-lg md:text-5xl font-bold text-[#CBD5F5] mb-2 ",
};
const role = {
  text: "I'm Front-End Developer.",
  style: "text-md md:text-4xl font-bold text-[#8892B0] mb-2",
};
const description = {
  text: "I’m a frontend web developer with extensive experience for over 2 years. My expertise is to create and websites design.",
  style: "text-xs md:text-md text-[#8892B0]",
};

const TypingAnimation = ({ text, style }: { text: string; style: string }) => (
  <div className="overflow-hidden">
    {text.split("").map((letter, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className={`inline-block overflow-hidden font-mons ${style}`}
        style={{ whiteSpace: "pre" }}
      >
        {letter}
      </motion.span>
    ))}
  </div>
);

const Index: NextPage = () => {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoPlay(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>portofolio-next-app</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>

      <RootLayout>
        <div className="relative w-full h-screen flex flex-row-reverse">
          <div className="w-full flex flex-col-reverse relative">
            <div className="relative px-5 md:pl-32 w-full md:w-3/4 lg:w-full h-screen pt-10 md:pt-20 ">
              <div className="absolute flex flex-col items-start z-30 w-full h-screen pr-10">
                <div className="hover:translate-x-5 duration-1000">
                  <TypingAnimation
                    text={sentence.text}
                    style={sentence.style}
                  />
                </div>
                <div className="hover:-translate-x-5 duration-1000">
                  <TypingAnimation text={name.text} style={name.style} />
                </div>
                <div className="hover:translate-x-5 duration-1000">
                  <TypingAnimation text={role.text} style={role.style} />
                </div>
                <div className="w-full md:w-1/2 hover:-translate-x-5 duration-1000">
                  <TypingAnimation
                    text={description.text}
                    style={description.style}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 3, duration: 0.8 }}
                  className="w-full"
                >
                  <button className="hover:scale-110 duration-500 border-solid border-2 border-[#8892B0] rounded-md px-3 py-2 font-mons font-medium text-sm text-[#8892B0] my-4">
                    Resume
                  </button>
                </motion.div>

                <div className="flex flex-col md:flex-row w-full justify-start items-start  gap-2 md:gap-5 lg:absolute lg:bottom-[260px] hover:translate-x-10 duration-700 ">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4, duration: 0.8 }}
                    className="w-full"
                  >
                    <Link
                      href="/blabla"
                      className="font-mons text-xs md:text-md font-medium text-[#8892B0]"
                    >
                      julydsp@gmail.com
                    </Link>
                    <hr className="bg-[#8892B0] w-full border-none h-[2px]" />
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 flex justify-end items-center md:w-1/2 lg:z-30">
                <motion.div
                  initial={{ opacity: 0, y: 300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 5.5, duration: 0.8 }}
                >
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay={autoPlay}
                    axis="horizontal"
                    interval={3000}
                    transitionTime={1000}
                    stopOnHover={false}
                    className="relative w-[600px] h-[750px] md:w-[800px] md:h-[1000px] bg-center object-cover bottom-0 -right-44  md:-right-20 "
                  >
                    <div className="fade-slide">
                      <Image
                        src={profile1}
                        alt="Profile Image 1"
                        width={800}
                        height={1000}
                        objectFit="cover"
                      />
                    </div>
                    <div className="fade-slide">
                      <Image
                        src={profile2}
                        alt="Profile Image 2"
                        width={800}
                        height={1000}
                        objectFit="cover"
                      />
                    </div>
                    <div className="fade-slide">
                      <Image
                        src={profile3}
                        alt="Profile Image 3"
                        width={800}
                        height={1000}
                        objectFit="cover"
                      />
                    </div>
                  </Carousel>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
          >
            <div className="h-screen relative hover:translate-y-10 duration-700">
              <ul className="absolute flex flex-col gap-5 left-[26px] bottom-60 z-40">
                <Link
                  href="https://x.com/_julydsp"
                  className="hover:scale-125 duration-700 hover:rotate-[360deg]"
                >
                  <FaXTwitter className="text-[#CBD5F5] text-xl " />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/julydsp"
                  className="hover:scale-125 duration-700 hover:rotate-[360deg]"
                >
                  <FaLinkedinIn className="text-[#CBD5F5] text-xl" />
                </Link>
                <Link
                  href="https://www.instagram.com/xjydsp"
                  className="hover:scale-125 duration-700 hover:rotate-[360deg]"
                >
                  <FaInstagram className="text-[#CBD5F5] text-xl" />
                </Link>
              </ul>
              <hr className="absolute bg-[#8892B0] border-none h-[2px] rotate-90 w-60 -left-[84px] bottom-20" />
            </div>
          </motion.div>
        </div>
      </RootLayout>
    </>
  );
};

export default Index;
