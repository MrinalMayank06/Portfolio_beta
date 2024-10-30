import React from 'react'

import java from "../../public/java.png"
import js from "../../public/jsimg.png"
import mongodb from "../../public/mongodb.png"
import react from "../../public/react.png"
import ex from "../../public/ex.png"
import mso from "../../public/mso.png"
import css from "../../public/css.png"
import html from "../../public/html.png"


function Experiance() {

    const cardItems = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB",
            
        },
        {
            id: 2,
            logo: js,
            name: "JavaScript",
            
        },
        {
            id: 3,
            logo: java,
            name: "Java",
             
        },
        {
            id: 4,
            logo: react,
            name: "ReactJs",
            
        },
        {
            id: 5,
            logo: ex,
            name: "ExpressJs",
             
        },
        {
            id: 6,
            logo: css,
            name: "CSS",
             
        },
        {
            id: 7,
            logo: html,
            name: "HTML",
             
        },
        {
            id: 8,
            logo: mso,
            name: "MS",
             
        }
    ];
    

    return (
        <div name="Experience"
         className="max-w-screen-2xl container mx-auto px-4  md:px-20  my-10  ">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experiance</h1>
                <p className=" font-semibold">
                    I've more than 2 yrs of Experiance in below tech</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                  {
                    cardItems.map(({id,name,logo})=> (
                        <div className=" flex flex-col items-center jusity-center border-[2px] rounded-full shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 " key={id}>
                            <img src={logo} 
                            className="w-[150px]   rounded-full " 
                            alt="" 
                            />
                            <div >
                                <div className="font-bold text-xl mb-2">{name}</div>
                                 
                            </div>
                             
                        </div>
                    ))
                  }
                </div>

            </div>


        </div>
    )
}

export default  Experiance