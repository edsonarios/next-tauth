import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import InfojobsProvider from 'infojobs-next-auth-provider'
const clientId = process.env.CLIENT_ID ?? ''
const clientSecret = process.env.CLIENT_SECRET ?? ''
const redirectUri = process.env.REDIRECT_URI ?? ''
// const handler = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: '3a3fb4fb9702efd5315f',
//       clientSecret: '6ccc4a0960ce634a366ad4486f19bf33e324fd87'
//     })
//   ]
// })
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
      accessToken?: string;
      refreshToken?: string;
      user: {
      } & User
  }

  interface User {

  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
      accessToken?: string
      refreshToken?: string;
  }
}

const handler = NextAuth({
  // pages: {
  //   signIn: '/',
  //   signOut: '/'
  // },
  providers: [
    InfojobsProvider({
      clientId,
      clientSecret,
      redirect_uri: redirectUri,
      infojobs_scopes: 'MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_EDIT_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_CVTEXT,CANDIDATE_EDIT_CURRICULUM_CVTEXT,CANDIDATE_EDIT_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_EDIT_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_DELETE_CURRICULUM_EXPERIENCE,CANDIDATE_DELETE_CURRICULUM_EDUCATION'
    })
  ],
  callbacks: {
    async jwt ({ token, account }) {
      console.log(token)
      console.log(account)
      if (account != null) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        // session.accessToken = token.accessToken
        // session.refreshToken = token.refreshToken
      }
      console.log(token)
      return token || {}
    },
    async session ({ session, token }) {
      console.log(session)
      console.log(token)
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      return session
    }
  },
  debug: true
})

export { handler as GET, handler as POST }