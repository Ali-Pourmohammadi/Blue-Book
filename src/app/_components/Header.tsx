import React from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';

function Header() {
  return (
    <header className="bg-gradient-to-l from-white to-blue-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center w-3/4 border-b">
        {/* Optionally include Logo component */}
        <Logo />
        {/* Optionally include NavigationLinks component */}
        <NavigationLinks />
      </div>
    </header>
  );
}

export { Header };
