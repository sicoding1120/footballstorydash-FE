"use client";

import { fetcher } from "@/lib/fetcher";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const DynamicRoot = () => {
  const { slug } = useParams();
  const [token, setToken] = useState<any>();
  const { data, error, isLoading } = useSWR(
    `https://footballstorybe.vercel.app/user/${slug.at(1)}`,
    fetcher
  );

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.origin === "https://footballstory.vercel.app/") {
        const token = event.data;
        setToken(token);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  console.log(token);
  return (
    <div>
      Data user:
      <p>{data?.data?.username}</p>
      <p>{data?.data?.email}</p>
    </div>
  );
};

export default DynamicRoot;
