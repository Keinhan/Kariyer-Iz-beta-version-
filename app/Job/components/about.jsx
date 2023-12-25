import React, { useState } from 'react';
import Image from "next/image";
import Logo from "/public/images/Logo.svg.png";
const about=()=>{
    const [tab,setTab]=useState(1);
    const handleTab=(index)=>{
        setTab(index)
    }
    return(
        <div className='my-32 w-[380px] sm:w-[610px] lg:w-[980px] xl:w-11/12 bg-white shadow-2xl rounded-2xl mx-auto  px-12 py-12'>
            <section>
           <article className='flex flex-col lg:flex-row justify-between'>
           <div className='flex flex-col lg:flex-row items-center gap-8'>
<div>
<Image src={Logo} className="w-32" />
</div>
<div >
    <p className='text-5xl font-bold text-center mb-5 lg:text-left'>Full Stack Developer</p>
    <div className="flex flex-col items-center  lg:justify-start lg:items-start sm:flex-row gap-x-4 flex-wrap lg:w-4/5   xl:w-full my-4 gap-y-2 ">
        <div className="bg-blue-200 w-36 text-center sm:text-left sm:w-auto text-blue-700 font-semibold rounded-xl py-1 px-2 ">
          2 Positions
        </div>
        <div className="bg-green-200 w-36 text-center sm:text-left sm:w-auto text-green-700 font-semibold rounded-xl py-1 px-2 ">
          Full Time
        </div>
        <div className="bg-yellow-200 w-36 text-center sm:text-left sm:w-auto text-yellow-700 font-semibold rounded-xl py-1 px-2 ">
          2 Years
        </div>
        <div className="bg-pink-200 w-36 text-center sm:text-left sm:w-auto text-pink-700 font-semibold rounded-xl py-1 px-2 ">
          $95.000/Year
        </div>
        <div className="bg-red-200 w-36 text-center sm:text-left sm:w-auto text-red-700 font-semibold rounded-xl py-1 px-2 ">
          WFO
        </div>
      </div>
</div>
</div>
<div className='flex lg:block justify-center lg:justify-start py-4 lg:py-0'>
<button className="bg-blue-500 max-[376px]:w-36  focus:text-white text-white focus:bg-blue-900 button-6">
          Apply Now
        </button>
</div>
           </article>
           <div className='flex flex-col gap-3 sm:gap-6 lg:gap-3 mt-8 text-xl justify-center lg:justify-start    text-gray-600 lg:border-b-2   font-bold sm:flex-row'>
            <button onClick={()=>handleTab(1)} className={tab===1 ? 'border-b-4 mx-auto sm:mx-0 text-center text-black lg:text-left border-[#068FFF] pb-2': 'pb-2'}>
                Job Description
            </button>
            <button onClick={()=>handleTab(2)} className={tab===2 ? 'border-b-4 mx-auto sm:mx-0 text-center text-black lg:text-left border-[#068FFF] pb-2': 'pb-2'}>
                Education
            </button>
            <button onClick={()=>handleTab(3)} className={tab===3 ? 'border-b-4 mx-auto sm:mx-0 text-center text-black lg:text-left border-[#068FFF] pb-2': 'pb-2'}>
                Total Applicants
            </button>
           </div>
           <article className={tab===1 ? 'block' : 'hidden'}>
            <p className='text-gray-400 text-center sm:text-left mt-6 text-base sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nobis aut eaque rerum deserunt placeat quasi alias dolore qui ipsam ad cum, quam est distinctio doloribus? Voluptas dolores culpa in laudantium! Expedita, minus ea adipisci nobis necessitatibus recusandae repellat sint, voluptatum eius doloribus cupiditate!</p>
            <p className='text-gray-400 text-center sm:text-left my-6 text-base sm:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempora eaque sed, sapiente quibusdam magni optio, fugiat ipsam mollitia tenetur explicabo ducimus! Aliquid nostrum suscipit atque sunt exercitationem aut? Error, obcaecati perferendis! Maiores consequuntur quibusdam inventore ex deserunt fugit facere!</p>
            <p className='text-lg sm:text-xl text-center sm:text-left font-bold mb-4'>Essential Knowledge,Skills,And Experience</p>
            <ul className='list-disc grid gap-3 text-lg text-gray-500 ml-8'>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis laudantium hic?
                </li>
                <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, praesentium.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quis vitae.
                </li>
                <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas pariatur dignissimos voluptas et voluptatibus?
                </li>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sit non maxime?
                </li>
            </ul>
           </article>
           <article className={tab===2 ? 'block' : 'hidden'}>
            <p className='text-gray-400 text-center sm:text-left mt-6 text-base sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nobis aut eaque rerum deserunt placeat quasi alias dolore qui ipsam ad cum, quam est distinctio doloribus? Voluptas dolores culpa in laudantium! Expedita, minus ea adipisci nobis necessitatibus recusandae repellat sint, voluptatum eius doloribus cupiditate!</p>
            <p className='text-gray-400 text-center sm:text-left my-6 text-base sm:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempora eaque sed, sapiente quibusdam magni optio, fugiat ipsam mollitia tenetur explicabo ducimus! Aliquid nostrum suscipit atque sunt exercitationem aut? Error, obcaecati perferendis! Maiores consequuntur quibusdam inventore ex deserunt fugit facere!</p>
            <p className='text-lg sm:text-xl text-center sm:text-left font-bold mb-4'>Essential Education,Skills,And Experience</p>
            <ul className='list-disc grid gap-3 text-lg text-gray-500 ml-8'>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis laudantium hic?
                </li>
                <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, praesentium.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quis vitae.
                </li>
                <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas pariatur dignissimos voluptas et voluptatibus?
                </li>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sit non maxime?
                </li>
            </ul>
           </article>
           <article className={tab===3 ? 'block' : 'hidden'}>
            <p className='text-gray-400 text-center sm:text-left mt-6 text-base sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nobis aut eaque rerum deserunt placeat quasi alias dolore qui ipsam ad cum, quam est distinctio doloribus? Voluptas dolores culpa in laudantium! Expedita, minus ea adipisci nobis necessitatibus recusandae repellat sint, voluptatum eius doloribus cupiditate!</p>
            <p className='text-gray-400 text-center sm:text-left my-6 text-base sm:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempora eaque sed, sapiente quibusdam magni optio, fugiat ipsam mollitia tenetur explicabo ducimus! Aliquid nostrum suscipit atque sunt exercitationem aut? Error, obcaecati perferendis! Maiores consequuntur quibusdam inventore ex deserunt fugit facere!</p>
            <p className='text-lg sm:text-xl text-center sm:text-left font-bold mb-4'>Essential Application,Skills,And Experience</p>
            <ul className='list-disc grid gap-3 text-lg text-gray-500 ml-8'>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis laudantium hic?
                </li>
                <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, praesentium.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quis vitae.
                </li>
                <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas pariatur dignissimos voluptas et voluptatibus?
                </li>
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sit non maxime?
                </li>
            </ul>
           </article>
            </section>

        </div>
    )
}
export default about