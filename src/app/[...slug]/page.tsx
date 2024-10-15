'use client'

import { fetcher } from '@/lib/fetcher';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr';


const DynamicRoot = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useSWR(`https://footballstorybe.vercel.app/user/${slug.at(1)}`, fetcher);
  console.log(data, error, isLoading);  
  return (
    <div>Data user: 
      <p>{data.data.username}</p>
      <p>{data.data.email}</p>
    </div>
  )
}

export default DynamicRoot