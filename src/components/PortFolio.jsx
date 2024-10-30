import React from 'react'

import java from "../../public/java.png"
import js from "../../public/jsimg.png"
import mongodb from "../../public/mongodb.png"
import react from "../../public/react.png"
import ex from "../../public/ex.png"

function PortFolio() {

    const cardItems = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB",
            description: "A NoSQL database that provides high performance, high availability, and easy scalability."
        },
        {
            id: 2,
            logo: js,
            name: "JavaScript",
            description: "A language widely used for interactive web development and front-end dynamic behavior."
        },
        {
            id: 3,
            logo: java,
            name: "Java",
            description: "A cross-platform, object-oriented language popular for robust e  software solutions."
        },
        {
            id: 4,
            logo: react,
            name: "ReactJs",
            description: "A JavaScript library for creating responsive user interfaces, e single-page applications."
        },
        {
            id: 5,
            logo: ex,
            name: "ExpressJs",
            description: "A flexible Node.js framework for building efficient, scalable web a and RESTful APIs."
        }
    ];
    

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4  md:px-20  mt-10  ">
            <div>
                <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
                <span className="underline font-semibold"> Featured Projects</span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                  {
                    cardItems.map(({id,name,logo,description})=> (
                        <div className="md: w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 " key={id}>
                            <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" 
                            alt="" 
                            />
                            <div >
                                <div className="font-bold text-xl mb-2">{name}</div>
                                <p className="px-2 text-gray-700 text-justify">{description}</p>
                            </div>
                            <div className=" justify-around px-6 py-4 space-x-4" >
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">Video</button>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">SourceCode</button>
                            </div>
                        </div>
                    ))
                  }
                </div>

            </div>


        </div>
    )
}

export default PortFolio