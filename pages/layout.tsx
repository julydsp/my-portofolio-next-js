import Image from "next/image";
import LogoTerang from "@/public/logo-warna-terang.png";
import LogoGelap from "@/public/logo-warna-gelap.png";
import GithubLogo from "@/public/github-logo.png";
import Link from "next/link";
import { useState } from "react";
import { FiSlack } from "react-icons/fi";
import { FiXOctagon } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

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

  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <div className="relative w-full bg-[#0A192F] overflow-hidden max-h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-blue-500 opacity-30 "></div>
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-[#81E6D9] via-transparent to-transparent blur-[130px] opacity-70 "></div>

          <div className="fixed w-full h-16 flex justify-between items-center px-5 my-3 z-50">
            <div className="pl-5">
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
            >
              <div className="md:hidden flex flex-col justify-center items-center pr-5">
                <FiSlack
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[#8892B0] text-2xl"
                />
                <span className="text-[#8892B0] text-xs">Menu</span>
              </div>
            </motion.div>
            <div className="hidden md:flex">
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
                  <Link
                    href="/about"
                    className="hover:text-[#CBD5F5] duration-700 font-semibold"
                  >
                    About
                  </Link>
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
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: "-100%" }}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.8 }}
              className="md:hidden absolute transition-all duration-700 top-0 left-0 w-full h-auto bg-[#8892B0] flex flex-col items-center justify-center z-50 p-5"
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

                <Link
                  href="/about"
                  className="hover:bg-[#0A192F] hover:text-[#8892B0] text-[#0A192F] text-center rounded-lg w-full cursor-pointer px-3 py-2 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
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
          )}

          <div className="pt-20 px-5 h-screen">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
