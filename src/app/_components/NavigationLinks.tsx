import Link from "next/link";
import { auth } from "../_lib/auth";

export async function NavigationLinks() {
  const session = await auth()
  
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
      <li>{session?.user?.image ?   
         <Link
            href="/account"
            className="hover:text-accent-400 transition-colors px-5  gap-4 flex"
          >
            <img className="h-8 rounded-full" src={session.user.image} alt={session.user.name} referrerPolicy="no-referrer">
            </img>
            <span>
            Account
            </span>
          </Link>:   <Link
            href="/login"
            className="hover:text-accent-400 transition-colors"
          >
            Account
          </Link>
          }
        </li>
      <li>
        <Link href="/books" passHref className="hover:text-gray-900">
        Books
        </Link>
      </li>
    </ul>
  );
}
