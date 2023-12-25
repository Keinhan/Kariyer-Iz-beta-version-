import React from "react";
import Image from "next/image";
import Logo from "/public/images/Logo.svg.png";
import Link from "next/link";
import Vip from "/public/images/vip.png";
import Crown from "/public/images/crown.png";
import { AiFillHeart } from "react-icons/ai";
import Post from "./Post";
import { postsData } from "@/data";
import CategoriesList from "./CategoriesList";
import { TPost } from "@/app/types";

const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const CardPremium = async () => {
  const posts = await getPosts();
  return (
    // <div className="bg-white max-[376px]:w-[320px] w-[350px] p-5 rounded-2xl sm:w-[26rem] darkness">
    //   <div>
    //     <div className="flex flex-col items-center sm:items-start sm:flex-row gap-y-2 gap-x-6 ">
    //       <div>
    //         <Image src={Logo} className="w-20 mt-3" />
    //       </div>
    //       <div>
    //         <p className="text-2xl text-center sm:text-left font-semibold">Google Inc.</p>
    //         <p className="text-center sm:text-left">USA</p>
    //       </div>
    //       <button className="sm:ml-auto button-6 text-black rounded-full text-2xl py-1 px-4 focus:text-red-600">
    //         {" "}
    //         <AiFillHeart />{" "}
    //       </button>
    //     </div>
    //   </div>
    //   <p className="mb-2 mt-6 flex  font-bold text-xl justify-center sm:justify-between">
    //     {" "}
    //     Project Manager
    //   </p>
    //   <p className="mb-4 w-2/3 mx-auto sm:mx-0 sm:w-auto text-center sm:text-left">
    //     As a project manager, your work will cut across areas of judicious
    //     planning, operational...
    //   </p>
    //   <div className="flex flex-col items-center sm:items-start sm:flex-row gap-x-4 flex-wrap sm:w-4/5 my-4 gap-y-2 ">
    //     <div className="bg-blue-200 w-36 text-center sm:text-left sm:w-auto text-blue-700 font-semibold rounded-xl py-1 px-2 ">
    //       2 Positions
    //     </div>
    //     <div className="bg-green-200 w-36 text-center sm:text-left sm:w-auto text-green-700 font-semibold rounded-xl py-1 px-2 ">
    //       Full Time
    //     </div>

    //     <div className="bg-yellow-200 w-36 text-center sm:text-left sm:w-auto text-yellow-700 font-semibold rounded-xl py-1 px-2 ">
    //       2 Years
    //     </div>
    //     <div className="bg-pink-200 w-36 text-center sm:text-left sm:w-auto text-pink-700 font-semibold rounded-xl py-1 px-2 ">
    //       $95.000/Year
    //     </div>
    //     <div className="bg-red-200 w-36 text-center sm:text-left sm:w-auto text-red-700 font-semibold rounded-xl py-1 px-2 ">
    //       WFO
    //     </div>
    //   </div>
    //   <div className="flex max-[376px]:flex-col max-[376px]:items-center gap-y-2 justify-evenly px-4 pt-2">
    //     <button className="bg-blue-500 max-[376px]:w-36 focus:text-white text-white focus:bg-blue-900 button-6">
    //     <Link href='../Job'> Apply Now </Link>
    //     </button>
    //     <button className="button-6 max-[376px]:w-36">View Details</button>
    //   </div>
    // </div>
    <div>
      {/* <div className=" justify-center text-xl  gap-2 sm:gap-4 sm:text-4xl font-bold ">
        <div className="flex justify-center">
          <Image
            src={Crown}
            className="sm:h-40 sm:w-40 w-28 h-28"
            alt="Crown"
          />{" "}
        </div>
        <div className="flex justify-center">
          <p className="">Premium</p>{" "}
        </div>

        <div className="flex justify-center mb-6">
          <p className="">Anouncements</p>
        </div>
      </div> */}
      <div className="mt-32 justify-center text-xl  gap-2 sm:gap-4 sm:text-4xl ">
        <CategoriesList />
      </div>
      {posts && posts.length > 0 ? (
        posts.map((post: TPost) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author.name}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            category={post.catName}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">No posts to display</div>
      )}
    </div>
  );
};

export default CardPremium;
