import React from "react";
import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Logo from "/public/images/Logo.svg.png";
import Link from "next/link";
import Vip from "/public/images/vip.png";
import Crown from "/public/images/crown.png";
import { AiFillHeart } from "react-icons/ai";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}

const Post = async ({
  id,
  author,
  date,
  thumbnail,
  authorEmail,
  title,
  content,
  links,
  category,
}: PostProps) => {
  const session = await getServerSession(authOptions);

  const isEditable = session && session?.user?.email === authorEmail;

  const dateObject = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <div className="my-4 border-b border-b-300 py-8">
      <div className="bg-white w-3/4 p-5 rounded-2xl sm:w-[26rem] darkness">
        <div>
          <div className="flex flex-col items-center sm:items-start sm:flex-row gap-y-2 gap-x-6 ">
            <div className="text-center mx-auto">
              <p className="text-3xl text-center sm:text-left font-semibold">
                {author}
              </p>
              <p className="text-center sm:text-left">{formattedDate}</p>
            </div>
          </div>
        </div>
        <h1 className="mx-auto mt-6 text-4xl">{title}</h1>
        <p className="my-8 w-2/3 mx-auto sm:mx-0 sm:w-auto text-center sm:text-left">
          {content}
        </p>
        {links && (
          <div className="my-4 flex flex-col gap-3 ">
            {links.map((link, i) => (
              <div key={i} className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>{" "}
                <Link className="link" href={link}>
                  {" "}
                  {link}{" "}
                </Link>{" "}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-x-4 flex-wrap sm:w-4/5 my-4 gap-y-2 ">
          {category && (
            <div className="bg-slate-800 w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block mx-auto">
              {" "}
              {category}{" "}
            </div>
          )}
        </div>
        {isEditable && (
          <div className="flex gap-3 font-bold py-2 px-4 rounded-md mx-auto w-fit">
            <Link href={`/edit-post/${id}`} className="button-6">
              Edit
            </Link>
            <DeleteButton id={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
