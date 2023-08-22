import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className="px-4 py-14 text-xl font-medium text-gray-400/80">
        REGISTRATION
      </h1>
      <Link href="/route-groups/login">Login ⇨</Link>
    </>
  );
}
