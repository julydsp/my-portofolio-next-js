import Link from "next/link";
import RootLayout from "../layout";
import Image from "next/image";
import barong from "@/public/Barong.png";
import { useState } from "react";
import cmsDestimate from "@/public/cms-destimate.png";
import landingPageDestimate from "@/public/landing-page-destimate.png";
import miniProject from "@/public/miniproject.png";
import { FaGithub, FaIcons, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function project() {
  const projectData = [
    {
      id: 1,
      year: "2023",
      projectName: "Mini Project Klephone",
      statusProject: "Studi Independent in Alterra Academy",
      projectDesc: "Sebuah project sederhana pada saat di Alterra Academy menerapkan materi yang telah diberikan untuk membuat sistem CRUD, website ini berguna untuk mengelola produk handphone disebuah store, dan juga saya mengintegrasikan AI didalam website sederhana ini.",
      technology: [
        "react",
        "tailwindcss",
        "redux",
        "vercel",
        "openAI"
      ],
      link: "https://dashboard-klephone-production.vercel.app/",
      imageProject: [miniProject]
    },
    {
      id: 2,
      year: "2023",
      projectName: "Destimate Landing Page",
      statusProject: "Studi Independent in Alterra Academy",
      projectDesc: "Aplikasi destimate ini dapat memudahkan anda dalam memilih destinasi wisata yang populer, pembelian tiket wisata yang cepat tanpa antrian, dan juga terdapat diskon eksklusif dan pastinya menghemat biaya anda.",
      technology: [
        "react",
        "tailwindcss",
        "netlify",
        "HeadlessUi",
      ],
      link: "https://destimate-dev.netlify.app/#kontak",
      imageProject: [landingPageDestimate]
    },
    {
      id: 3,
      year: "2023",
      projectName: "Destimate CMS",
      statusProject: "Studi Independent in Alterra Academy",
      projectDesc: "pengelolaan data pengguna, transaksi, promo, destinasi, laporan, dll, dengan aman dilengkapi dengan integrasi Artificial Intelligence(AI) ",
      technology: [
        "react",
        "tailwindcss",
        "shadcn",
        "redux",
        "netlify",
        "openAI"
      ],
      link: "https://cms-dev-destimate.netlify.app/login",
      imageProject: [cmsDestimate]
    },
    {
      id: 4,
      year: "2024",
      projectName: "Barong App",
      statusProject: "Tugas Akhir D3 Sistem Informasi Universitas Bina Sarana Informatika",
      projectDesc: "Aplikasi Barong ini bertujuan untuk memudahkan pengepul barang rongsok dalam meningkatkan efisiensi pengumpulan barang rongsok dan membantu meningkatkan pelayanan dalam proses pengumpulan barang rongsok agar dapat memaksimalkan pendapatan. Aplikasi ini juga akan memfasilitasi masyarakat untuk menjual barang rongsok yang dimiliki dengan lebih mudah dan cepat.",
      technology: [
        "nuxt",
        "tailwindcss",
        "prisma",
        "vuejs",
      ],
      link: "https://www.barongsolo.com/",
      imageProject: [barong]
    }
  ]
  const [isHovered, setIsHovered] = useState<number>(0);
  return (
    <>
      <RootLayout>
        <div className="h-full flex flex-wrap gap-10 w-full lg:px-26 md:px-14 pt-10 md:flex-wrap lg:flex-nowrap">
          <div className="w-full md:w-1/2 text-[#8892B0] h-auto lg:h-screen flex flex-col-reverse lg:flex-col gap-5 lg:gap-0">
            <motion.div
              initial={{ opacity: 0, translateY: "-100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.6 }}
              className=" w-full max-h-screen md:w-[400px] font-popp lg:fixed">
              <div className="pt-5 md:pt-7">
                <h1 className="font-semibold text-5xl mb-5 text-[#CBD5F5]">My Project</h1>
                <p className="text-light text-sm">ini semua project yang saya kerjakan secara individu dan kelompok</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "-100px" }}
              animate={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-center sm:items-start md:items-start lg:items-start relative lg:fixed lg:bottom-20">
              <div className="flex justify-center items-center gap-3">
                <Link href={"https://www.instagram.com/xjydsp"}>
                  <div className="w-auto h-auto p-2 rounded-xl bg-slate-400 bg-opacity-20"><FaInstagram className="text-[rgb(229, 231, 235)] hover:text-slate-200 duration-300" size={25} /></div>
                </Link>
                <Link href={"https://github.com/julydsp"}>
                  <div className="w-auto h-auto p-2 rounded-xl bg-slate-400 bg-opacity-20"><FaGithub className="text-[rgb(229, 231, 235)] hover:text-slate-200 duration-300" size={25} /></div>
                </Link>
                <Link href={"https://x.com/_julydsp"}>
                  <div className="w-auto h-auto p-2 rounded-xl bg-slate-400 bg-opacity-20"><FaTwitter className="text-[rgb(229, 231, 235)] hover:text-slate-200 duration-300" size={25} /></div>
                </Link>
                <Link href={"https://www.linkedin.com/in/julydsp"}>
                  <div className="w-auto h-auto p-2 rounded-xl bg-slate-400 bg-opacity-20"><FaLinkedin className="text-[rgb(229, 231, 235)] hover:text-slate-200 duration-300" size={25} /></div>
                </Link>
              </div>
              <hr className="mt-5  w-[200px] md:w-[200px] lg:w-[200px] border-[#8892B0]" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 md:w-full h-full relative flex flex-col gap-10 pb-5">
            {/* card project */}
            {projectData.map((project) => (
              <Link key={project.id} href={project.link}>
                <motion.div
                initial={{opacity:0, translateY:"-100px"}}
                animate={{opacity:1, translateY:"0px"}}
                transition={{delay:0.2, duration:0.6}}
                 className="flex flex-col"
                  onMouseEnter={() => setIsHovered(project.id)}
                  onMouseLeave={() => setIsHovered(0)}>
                  <div className="group bg-slate-400 bg-opacity-10 lg:bg-slate-400 p-5 lg:bg-transparent lg:bg-opacity-0 lg:hover:bg-slate-400 lg:min-w-[516px] h-auto w-full lg:hover:bg-opacity-10 transition duration-300 rounded-lg font-popp lg:p-7 flex gap-5 sm:gap-7 lg:gap-9 justify-center items-start">
                    <div className="w-fit md:w-auto md:min-w-[70px]">
                      <h1 className="text-[#8892B0] md:group-hover:text-[#CBD5F5] font-medium text-sm pt-[2px] transition duration-300">{project.year}</h1>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <h1 className="font-medium text-base text-[#CBD5F5] transition duration-300">{project.projectName}</h1>
                      <h2 className="font-medium text-xs text-[#8892B0] md:group-hover:text-[#CBD5F5] transition duration-300">{project.statusProject}</h2>
                      <p className=" font-light text-sm text-[#8892B0] md:group-hover:text-[#CBD5F5] transition duration-300 leading-5 md:text-left">{project.projectDesc}</p>
                      <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-3 text-center justify-center md:justify-start items-center">
                        {project.technology.map((tech, index) => (
                          <div key={index} className="bg-slate-400 w-full max-w-[120px] p-3 py-1 bg-opacity-20 text-[#8892B0] text-xs md:group-hover:text-[#CBD5F5] text-center rounded-3xl transition duration-300"><h1>{tech}</h1></div>
                        ))}
                      </div>
                      <div className="w-full grid grid-cols-1 gap-3 pt-5 transition-all duration-700 ease-in-out lg:hidden">
                        {project.imageProject.map((image, index) => (
                          <Image key={index} className="rounded-xl w-full duration-700 transition-opacity ease-in-out" src={image} width={300} height={150} alt="project-barong" />
                        ))}
                      </div>

                      {isHovered === project.id && (

                        <div className="w-full grid grid-cols-1 gap-3 pt-5 transition-all duration-700 ease-in-out">
                          {project.imageProject.map((image, index) => (
                            <Image key={index} className="rounded-xl w-full duration-700 transition-opacity ease-in-out" src={image} width={300} height={150} alt="project-barong" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </RootLayout>
    </>
  );
}
