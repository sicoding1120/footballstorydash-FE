'use client'

import Loaders from '@/components/elements/loaders'
import Dashboard from '@/components/layouts/dashboard'
import { fetcher } from '@/lib/fetcher'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import CryptoJS from 'crypto-js'
import Cookie from 'js-cookie'

const DynamicRoot = () => {
  const [token, setToken] = useState<String>('')
  const { slug } = useParams()

  function decryptToken (encryptedToken: any) {
    const bytes = CryptoJS.AES.decrypt(
      encryptedToken,
      'footballstoryenccodesecret'
    )
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  function getQueryParam (param: string) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }

  const { data, error, isLoading } = useSWR(
    `https://footballstorybe.vercel.app/auth/access/${slug.at(1)}`,
    fetcher
  )

  useEffect(() => {
    const encryptedToken = getQueryParam('$f0th$s^5&*28#@8^#y&^##$%#')
    if (encryptedToken) {
      // Dekripsi token
      const token = decryptToken(encryptedToken)

      if (token) {
        // Lakukan validasi token di sini
        console.log('Token JWT:', token)
        // Misalnya, simpan token ke dalam localStorage
        localStorage.setItem('access_token', token)
      } else {
        console.error('Token tidak valid setelah dekripsi')
        // Redirect atau tampilkan pesan error jika token tidak valid
      }
    } else {
      console.error('Token tidak ditemukan')
      // Redirect atau tampilkan pesan error jika token tidak ada
    }
  }, [])

  console.log(token)

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
