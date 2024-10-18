'use client'

import Loaders from '@/components/elements/loaders'
import Dashboard from '@/components/layouts/dashboard'
import { fetcher } from '@/lib/fetcher'
import { useParams, useSearchParams} from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import CryptoJS from 'crypto-js'
import Cookie from 'js-cookie'

const DynamicRoot = () => {
  const { slug } = useParams()
  const searchParams = useSearchParams()


  function decryptToken (encryptedToken: any) {
    try {
      const bytes = CryptoJS.AES.decrypt(
        encryptedToken,
        'footballstoryenccodesecret'
      )
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8)
      if (decryptedToken) {
        return decryptedToken
      } else {
        console.error('Decrypted token is invalid or empty')
        return null
      }
    } catch (error) {
      console.error('Error decrypting token:', error)
      return null
    }
  }

 

  const { data, error, isLoading } = useSWR(
    `https://footballstorybe.vercel.app/auth/access/${slug?.at(1)}`,
    fetcher
  )

  useEffect(() => {
    const encryptedToken = searchParams.get('encode')
    if (encryptedToken) {
      // Dekripsi token
      const token = decryptToken(encryptedToken)

      if (token) {
        // Lakukan validasi token di sini
        Cookie.set(`${slug?.at(1)}`, token, { expires: 1 })
        // Misalnya, simpan token ke dalam localStorage
      } else {
        console.error('Token tidak valid setelah dekripsi')
        // Redirect atau tampilkan pesan error jika token tidak valid
      }
    } else {
      console.error('Token tidak ditemukan')
      // Redirect atau tampilkan pesan error jika token tidak ada
    }
  }, [searchParams, slug])

  if (isLoading) {
    return <Loaders />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Dashboard>
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
