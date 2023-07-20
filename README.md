This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) showcasing basic
Next.js features using **app router**.

## Run development version

- install dependencies: `npm install`
- run the development server: `npm run dev`
- open http://0.0.0.0:3000

## Routes

- http://0.0.0.0:3000 - home page
- http://0.0.0.0:3000/hello - hello page
- http://0.0.0.0:3000/cars - list of cars
- http://0.0.0.0:3000/cars/tesla - car details
- http://0.0.0.0:3000/api/hello - API route

## Run built version

- run the development server with `npm run dev` to serve JSON files from `public` folder, which are needed in `getData`
  functions, both for SSG and SSR
- `npm run build`
- stop the development server
- `npm run start`
- open http://0.0.0.0:3000
