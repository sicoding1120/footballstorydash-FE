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
    const handleReceiveMessage = (event: MessageEvent) => {
      // Pastikan pesan berasal dari https://footballstory.vercel.app
      if (event.origin === "https://footballstorydash.vercel.app") {
        const receivedToken = event.data;
        console.log("Token diterima:", receivedToken);
        setToken(receivedToken);
        localStorage.setItem("accessToken", receivedToken);
      } else {
        console.warn("Pesan dari origin yang tidak sah:", event.origin);
      }
    };

    window.addEventListener("message", handleReceiveMessage);

    return () => {
      window.removeEventListener("message", handleReceiveMessage);
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
