import CarLink from '@/app/cars/CarLink';

export default async function Cars() {
  const carIds = await getData();

  return (
    <>
      <h1>
        Cars list
      </h1>
      {carIds.map((id) => (
        <CarLink key={id} id={id}/>
      ))}
    </>
  );
}

async function getData() {
  /* SSG */
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  const staticData = await fetch('http://0.0.0.0:3000/cars.json', { cache: 'force-cache' })

  /* SSR */
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const dynamicData = await fetch('http://0.0.0.0:3000/cars.json', { cache: 'no-store' })

  /* ISR */
  // This request should be cached with a lifetime of 30 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const revalidatedData = await fetch('http://0.0.0.0:3000/cars.json', {
    next: { revalidate: 30 },
  })
  
  return await revalidatedData.json() as string[];
}
