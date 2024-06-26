/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import javascript from "../assets/javascript.png"
import React from "../assets/React.png"
import Tailwind from "../assets/Tailwind.png"
import GitHub from "../assets/GitHub.png"

const Skills = () => {
    return (       

        <div name="skills"className="w-full h-screen bg-[#0a192f] text-gray-300 " > 
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300 ">Skills</p>
                    <p className="py-4">// Technologies I've worked with</p>
                </div>
                {/* container for all icons */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="my-4">HTML</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                    <p className="my-4">CSS</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
                    <p className="my-4">TAILWIND</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
                    <p className="my-4">GITHUB</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
                    <p className="my-4">JAVASCRIPT</p>
                </div>

                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={React} alt="HTML icon" />
                    <p className="my-4">REACT</p>
                </div>
 

                </div>
            </div>

        </div>


     )
}

export default Skills 