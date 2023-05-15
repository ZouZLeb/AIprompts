"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  console.log(params);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };
    if (params?.id) fetchPost();
  }, []);

  return (
    <Profile
      name={`${userName}`}
      desc="Welcome to my Profile page"
      data={posts}
    />
  );
};

export default UserProfile;
