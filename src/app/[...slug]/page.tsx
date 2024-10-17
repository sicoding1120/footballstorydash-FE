'use client'

import Loaders from '@/components/elements/loaders'
import Dashboard from '@/components/layouts/dashboard'
import { fetcher } from '@/lib/fetcher'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Cookie from 'js-cookie'

const DynamicRoot = () => {
  const [token, setToken] = useState<String>('');
  const { slug } = useParams()
  const { data, error, isLoading } = useSWR(
    `https://footballstorybe.vercel.app/auth/access/${slug.at(1)}`,
    fetcher
  )
  useEffect(() => {
    window.addEventListener('message', event => {

      console.log(event);
      // Validasi origin
      if (event.origin !== 'https://footballstory.vercel.app') return;

      const { token } = event.data
      if (token) {
        setToken(token)
        // Simpan token untuk digunakan dalam aplikasi
        Cookie.set(`${slug.at(1)}`, data?.data?.access_token, {
          expires: 1,
          httpOnly: true
        })

        // Lakukan redirect atau aksi lainnya setelah mendapatkan token
        window.location.href = `https://footballstorydash.vercel.app/e/${slug.at(
          1
        )}`
      }
    })
  }, [data?.data?.access_token, slug])

  console.log(token);

  if (isLoading) {
    return <Loaders />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Dashboard>
      {/* <div>
        Data user:
        <p>{data?.data?.username}</p>
        <p>{data?.data?.email}</p>
        <p>{data?.data?.role}</p>
        <p>{data?.data?.createdAt}</p>
      </div> */}
      <div></div>
    </Dashboard>
  )
}

export default DynamicRoot
