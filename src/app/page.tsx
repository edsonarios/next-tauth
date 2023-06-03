'use client'
import Image from 'next/image'
import {Login} from './components/login'
import { SessionProvider } from 'next-auth/react'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Login />
        {/* <Home /> */}
    </main>
  )
}
