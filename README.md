This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech Stack

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

Before you run anything execute the following command which will generate a `AUTH_SECRET` for you

```
npx auth secret
```

and also register a new OAuth app with the correct github callback url `https://localhost:3000/api/auth/callback/github`

- AUTH_GITHUB_ID <-- CLIENT_ID
- AUTH_GITHUB_CLIENT_SECRET <-- AUTH_GITHUB_SECRET

and go over to [Sanity](https://www.sanity.io/) (our CMS) and create a project with Next.js as tech then copy the initialisation
command and execute it on your terminal and make sure you have setup the following on your `.env.local` file

- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_PROJECT_ID

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
