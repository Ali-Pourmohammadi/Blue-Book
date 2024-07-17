"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5 text-blue-600' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5 text-blue-600' />,
  },

];

function SideNavigation() {
  const pathName = usePathname();
  return (
    <nav className='border-r border-gray-200'>
      <ul className='flex flex-col gap-2 h-full text-lg p-5 '>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className={`py-3 px-5 hover:bg-gray-100 hover:text-gray-800 transition-colors flex items-center gap-4 font-semibold text-black ${pathName === link.href ? "bg-gray-100 text-gray-800" : ""}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
