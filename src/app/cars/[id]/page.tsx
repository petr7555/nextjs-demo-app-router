import Head from 'next/head';

type Car = {
  id: string;
  color: string;
  image: string;
}

export default async function Car({ params: { id } }: { params: { id: string } }) {
  const car = await getData(id);
  
  return (
    <>
      <Head>
        <title>{`${car.color} ${car.id}`}</title>
      </Head>

      <h1>
        Hello {id}
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={car.image} alt={car.id} width="300px"/>
    </>
  );
}

export async function getData(id: string) {
  const req = await fetch(`http://localhost:3000/${id}.json`);
  return await req.json() as Car;
}

export async function generateStaticParams() {
  const req = await fetch('http://localhost:3000/cars.json');
  return await req.json() as string[];
}
