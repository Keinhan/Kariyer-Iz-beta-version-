import React from "react";
import CreatePostForm from "../jobs/components/CreatePostForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CreatePost() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mt-32">
      <CreatePostForm />
    </div>
  );
}
