import React from "react"

import pic from "../../public/pic1.avif"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaYoutubeSquare } from "react-icons/fa"

import { SiMongodb } from "react-icons/si"
import { SiPreact } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
    return (
        <>
            <div name="Home"  
             className="max-w-screen-2xl container mx-auto px-4  md:px-20 my-20">
                <div className="flex flex-col md:flex-row">

                    <div className="md:w-1/2 mt-12  md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">It's My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm Tech</h1>
                            {/* <span > Devloper</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Professional", "Fanatic"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />

                        </div>
                        <br />
                        <p className="text-sm md:textgt-md text-justify ">
                            I’m passionate about building efficient and innovative software solutions that solve real-world problems.
                            With experience in web development and a keen interest in technology, I enjoy exploring new frameworks,
                            optimizing performance, and constantly learning to stay ahead in the tech field. Join me on this journey
                            as I share insights, projects, and my growth as a developer!
                        </p>

                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0">
                            <div className="space-y-2">
                                <h1 className="font-semibold text-center">Available On</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.facebook.com/mrinal.mayank.794?mibextid=ZbWKwL"
                                        target="_blank">
                                
                                        <FaFacebookSquare className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/mrinal__mayank?igsh=b2N4M3B6c2ZmbjJm"
                                        target="_blank">
                                        <FaInstagramSquare className="text-2xl cursor-pointer" />
                                        
                                        </a>
                                    </li>


                                    <li>
                                         <a href="https://www.linkedin.com/in/mrinal-mayank-452441252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                         target="_blank">
                                        <FaLinkedin className="text-2xl cursor-pointer" /></a>
                                    </li>
                                    <li>
                                       <a href="https://studio.youtube.com/channel/UCgAwrimSEQbMut2ZUUesZBg">
                                        <FaYoutubeSquare className="text-2xl cursor-pointer" /></a>
                                    </li>

                                </ul>

                            </div>

                            <div className="space-y-2">
                                <h1 className="font-semibold">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl]" />
                                    <SiPreact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl]" />
                                    <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl]" />
                                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl]" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
                    <img src={pic} 
                    className="rounded-full md:w-[450px] md:h-[450px]" 
                     alt="" />
                    </div>
                </div>

            </div>
        

    <hr />
        </>
    )
}

export default Home