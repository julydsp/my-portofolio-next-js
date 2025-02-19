import Image from "next/image";
import LogoTerang from "@/public/logo-warna-terang.png";
import LogoGelap from "@/public/logo-warna-gelap.png";
import GithubLogo from "@/public/github-logo.png";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiSlack } from "react-icons/fi";
import { FiXOctagon } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    open: { opacity: 1, y: "0" },
    closed: { opacity: 0, y: "-100%" },
  };
  const [isOpen, setIsOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const router = useRouter();

 

  return (
    <>
      {/* Layout UI */}
      <div className="relative w-full bg-[#0A192F] h-full overflow-hidden min-h-screen" >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-blue-500 opacity-30 "></div>
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-700 via-transparent to-transparent blur-[130px] opacity-70 "></div>

        <div className="fixed w-full h-16 transition-all duration-500 ease-out flex justify-between items-center px-5 mb-3 z-50 backdrop-blur-md font-popp">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={LogoTerang}
                width={35}
                height={35}
                alt="This is Logo My Portfolio"
                className="hover:scale-125 duration-700 hover:rotate-[360deg]"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="md:hidden flex flex-col justify-center items-center">
              <FiSlack
                className="text-[#8892B0] text-2xl"
              />
              <span className="text-[#8892B0] text-xs">Menu</span>
            </div>
          </motion.div>
          <div className="hidden duration-500 md:flex">
            <ul className="flex justify-center items-center gap-10 text-sm text-[#8892B0]">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <Link
                  href="/"
                  className="hover:text-[#CBD5F5] duration-700 font-semibold"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <div
                  className="hover:text-[#CBD5F5] duration-700 font-semibold cursor-pointer"
                  onClick={() => {
                      router.push("/?scrollTo=about")
                  }
                }
                >
                  About
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <Link
                  href="/project"
                  className="hover:text-[#CBD5F5] duration-700 font-semibold"
                >
                  Project
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <Link
                  href="/contact"
                  className="hover:text-[#CBD5F5] duration-700 font-semibold"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <Link href="https://github.com/julydsp">
                  <Image
                    src={GithubLogo}
                    width={25}
                    height={25}
                    alt="This is Github Logo"
                    className="hover:scale-125 duration-700 hover:rotate-45"
                  />
                </Link>
              </motion.div>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {
          isOpen && (
            <motion.nav
              initial={{ opacity: 0, animationDuration: "0.5", transitionTimingFunction: "ease-out", y: "-100%" }}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              className="md:hidden fixed transition-all duration-500 ease-in-out top-0 left-0 w-full h-screen bg-[#8892b0] flex flex-col items-center justify-center z-[999] p-5 font-popp"
            >
              <div className="pt-4">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Image
                    src={LogoGelap}
                    width={35}
                    height={35}
                    alt="This is Logo My Portfolio"
                  />
                </motion.div>
              </div>
              <ul className="flex flex-col justify-center items-center gap-8 text-sm py-[32px] w-full">
                <Link
                  href="/"
                  className="hover:bg-[#0A192F] hover:text-[#8892B0] text-[#0A192F] text-center rounded-lg w-full cursor-pointer px-3 py-2 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div
                  className="hover:bg-[#0A192F] hover:text-[#8892B0] text-[#0A192F] text-center rounded-lg w-full cursor-pointer px-3 py-2 font-semibold"
                  onClick={() => {
                      setIsOpen(false);
                      const aboutSection = document.getElementById("aboute");
                      aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  }
                >
                  About
                </div>
                <Link
                  href="/project"
                  className="hover:bg-[#0A192F] hover:text-[#8892B0] text-[#0A192F] text-center rounded-lg w-full cursor-pointer px-3 py-2 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Project
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-[#0A192F] hover:text-[#8892B0] text-[#0A192F] text-center rounded-lg w-full cursor-pointer px-3 py-2 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <motion.div
                  initial={{ opacity: 0, scaleZ: 0 }}
                  animate={{ opacity: 1, scaleZ: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="py-2"
                >
                  <Link
                    href="https://github.com/julydsp"
                    className="pl-3 bg-[#0A192F] w-32 text-center rounded-full px-3 py-2 flex justify-center items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiGithub className="text-xl text-[#8892B0]" />
                    <span className="text-[#8892B0] font-semibold">Github</span>
                  </Link>
                </motion.div>
              </ul>

              <div className="absolute top-7 right-5">
                <FiXOctagon
                  onClick={() => setIsOpen(false)}
                  className="text-[#0A192F] text-3xl"
                />
              </div>
            </motion.nav>
          )
        }

        <div className="pt-20 px-5 h-full">
           {/* Efek Cahaya di bawah kursor */}
        <motion.div
          className="fixed -top-14 -left-24 w-[500px] h-[500px] bg-blue-600 opacity-50 rounded-full blur-[100px] pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }} // Animasi perubahan opacity
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
          <main className="w-full h-full">{children}</main>
        </div>
      </div >
    </>
  );
}
