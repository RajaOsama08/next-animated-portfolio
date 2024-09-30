"use client"
import { motion, useInView, useScroll } from "framer-motion"
import Brain from "../components/brain"
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const skillRef = useRef();
  const isSkillRefView = useInView(skillRef)

  const experienceRef = useRef()
  const isExperienceRefView = useInView(experienceRef)
  return (
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y: "0%"}}
    transition={{duration:1}}
    >
      {/* container  */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography container  */}
          <div className="flex flex-col gap-12 justify-center">
           <h1 className="font-bold text-2xl">Biography</h1> 
           <p className="text-xl"> Hello this is Raja Osama Pervaiz, I am trying to learn 
            next js with react to increase my skills set.
           </p>
           <spam className="italic" >
            I.A I will be working on this project to gain skills
           </spam>
           {/* sign container  */}
           <div className=""></div>
           <div className="">later I have to add sign </div>
          </div>
          {/* skills container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skills title  */}
            <motion.h1
              initial={{x: "-300px"}}
              animate = {isSkillRefView ? {x:0}: {}}
              transition={{delay:0.2}}
              className="font-bold text-2xl">
                Skills
            </motion.h1>
            {/* skill list  */}
            <motion.div 
              initial={{x: "-300px"}}
              animate = {isSkillRefView ? {x:0}: {}}
              transition={{delay:0.2}}
              className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Js/Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TailwindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* skill scroll svg  */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience container  */}
            <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
              {/* skills title  */}
              <motion.h1 
                initial={{x:"-300px"}} 
                animate={isExperienceRefView ? {x:"0"}:{}}
                transition={{delay: 0.2}}
                className="font-bold text-2xl">
                  Experience
              </motion.h1>
              {/* experience list  */}
              <motion.div
                initial={{x:"-300px"}}
                animate={isExperienceRefView ? {x:"0"}:{}}
                className="">
                {/* experience list items  */}
                <div className="flex justify-between h-48">
                  {/* left side */}
                  <div className="w-1/3">
                    {/* job title  */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior JavaScript Engineer
                    </div>
                    {/* job desc  */}
                    <div className="p-3 text-sm italic">
                      My current employment, Way better than the position before!
                    </div>
                    {/* job date  */}
                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                    {/* job company  */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">LogicaSoft</div>
                  </div>
                  {/* center  */}
                  <div className="w-1/6">
                    {/* line  */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right  */}
                  <div className="w-1/3"></div>
                </div>

                {/* second exp div */}

                <div className="flex justify-between h-48">
                  {/* left side */}
                  <div className="w-1/3">               
                  </div>
                  {/* center  */}
                  <div className="w-1/6">
                    {/* line  */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right  */}
                  <div className="w-1/3">
                    {/* job title  */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior JavaScript Engineer
                    </div>
                    {/* job desc  */}
                    <div className="p-3 text-sm italic">
                      My current employment, Way better than the position before!
                    </div>
                    {/* job date  */}
                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                    {/* job company  */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">LogicaSoft</div>
                  </div>
                </div>

                {/* third experience div  */}

                <div className="flex justify-between h-48">
                  {/* left side */}
                  <div className="w-1/3">
                    {/* job title  */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Senior JavaScript Engineer
                    </div>
                    {/* job desc  */}
                    <div className="p-3 text-sm italic">
                      My current employment, Way better than the position before!
                    </div>
                    {/* job date  */}
                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                    {/* job company  */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">LogicaSoft</div>
                  </div>
                  {/* center  */}
                  <div className="w-1/6">
                    {/* line  */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* circle  */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* right  */}
                  <div className="w-1/3"></div>
                </div>

              </motion.div>
            </div>
        </div>
        {/* svg container  */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
         <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
