import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div>
      Registe page
      <Link href={'/auth/login'}>Login</Link>
    </div>
  );
}
