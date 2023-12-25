"use client";
import Image from "next/image";
import UserLogo from "/public/images/User.png";
import User from "./User";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center my-20">
      <div className="shadow-lg p-8 bg-zinc-50 flex flex-col gap-2 my-6 w-[80%]">
        <div className="flex mx-auto gap-24  ">
          <Image
            alt="User Logo"
            className="rounded-full bg-zinc-200 w-56 h-56 "
            src={UserLogo}
          />

          <div>
            <div className="text-xl">
              Welcome!{" "}
              <p className=" text-7xl font-bold">{session?.user?.name}</p>
            </div>
            <div className="text-xs mt-4">
              Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
          </div>
        </div>
        <div className="text-center"></div>
        <button onClick={() => signOut()} className="button-6">
          Log Out
        </button>
        <div className="flex gap-4"> </div>
      </div>
    </div>
  );
};

export default UserInfo;
