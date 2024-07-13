import Link from "next/link";

export function NavigationLinks() {
  return (
    <ul className="flex gap-10 from-gray-200 text-lg text-gray-500">
      <li>
        <Link href="/" passHref className="hover:text-gray-900">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" passHref className="hover:text-gray-900">
        About us
        </Link>
      </li>
      <li>
        <Link href="/account" passHref className="hover:text-gray-900">
          Account
        </Link>
      </li>
      <li>
        <Link href="/books" passHref className="hover:text-gray-900">
        Books
        </Link>
      </li>
    </ul>
  );
}
