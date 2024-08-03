// import React from 'react'
import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";


const Experience = () => {
return (
    <div className="border-b border-neutral-950 pb-4">

    <motion.h1 
    whileInView={{opacity:1, y: 0}}
    initial={{opacity:0, y: -100}}
    transition={{duration: 1.5}}
    className="text-4xl text-center my-20">Experience</motion.h1>

    <div>
        {EXPERIENCES.map((Experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: -100}}
                tansition={{duration: 1.5}}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-500 ">{Experience.year}</p>
                </motion.div>

                <motion.div 
                initial={{opacity:0 , x: 100}}
                whileInView={{opacity:1, x:0}}
                tansition={{duration: 1.5}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold"> 
                        {Experience.role} -{" "}
                        <span className="text-sm text-purple-100">{Experience.company}</span> 
                    </h6>
                    <p className="mb-4 text-neutral-400">{Experience.description}</p>
                    {Experience.technologies.map((tech, index) =>(
                        <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-700" key={index}>  {tech}  </span>
                    ))}
                </motion.div>

            </div>
        ))}
    </div>


    </div>
)
}

export default Experience