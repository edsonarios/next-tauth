'use client'
import { signIn, signOut, useSession} from 'next-auth/react'
export function Login() {
  const { data: session, status } = useSession()
  
  console.log(session, status)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={async () => await signIn('infojobs')}>Sign in</button>
    </>
  )
}

