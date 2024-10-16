'use client'

import Loaders from '@/components/elements/loaders'
import Dashboard from '@/components/layouts/dashboard'
import { fetcher } from '@/lib/fetcher'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const DynamicRoot = () => {
  const { slug } = useParams()
  const { data, error, isLoading } = useSWR(
    `https://footballstorybe.vercel.app/user/${slug.at(1)}`,
    fetcher
  )

  console.log(data);

  if (isLoading) {
    return <Loaders />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Dashboard username={data?.data?.username}>
      <div>
        Data user:
        <p>{data?.data?.username}</p>
        <p>{data?.data?.email}</p>
        <p>{data?.data?.role}</p>
        <p>{data?.data?.createdAt}</p>
      </div>
    </Dashboard>
  )
}

export default DynamicRoot
