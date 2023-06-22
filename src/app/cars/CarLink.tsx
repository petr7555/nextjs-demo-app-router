import Link from 'next/link';

type Props = {
  id: string;
}

export default function CarLink({ id }: Props) {
  return (
    <div>
      <Link href={`/cars/${id}`}>
        {id}
      </Link>
    </div>
  );
}
