import MaxWidth from '@/components/shared/max-width';
import Image from 'next/image';

export default function Home() {
  return (
    <MaxWidth>
      <div>
        Home
        <Image src={'/logo.svg'} width={33} height={33} alt="logo" />
        <h1>Сибирь Колесо</h1>
      </div>
    </MaxWidth>
  );
}
