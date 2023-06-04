# Next Auth with Infojobs

## Environment variables
```bash
CLIENT_ID="YOUR_CLIENT_ID"
CLIENT_SECRET="YOUR_CLIENT_SECRET"
REDIRECT_URI="http://<you.url.app>/api/auth/callback/infojobs"

# not working
REDIRECT_URI_LOCAL="http://127.0.0.1/api/auth/callback/infojobs"

NEXTAUTH_SECRET='Secret'
NEXTAUTH_URL=http://127.0.0.1:3000/api/auth/infojobs
```

## Install
```bash
# install packages
pnpm install

# start dev mode
pnpm run dev
```

## How use
- How Work OAuth [Theoric Explanation](https://www.youtube.com/watch?v=nNVlewjKQEQ&pp=ygUFb2F1dGg%3D)
- How use [NextAuth Tutorial](https://www.youtube.com/watch?v=cOgogGJ6_7M)
- [NextAuth Documentation](https://next-auth.js.org/) 

## Deploy
https://next-tauth.vercel.app/
