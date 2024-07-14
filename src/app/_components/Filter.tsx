"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface ButtonProps {
    activeFilter: string | null;
    filter: string;
    handleFilter: (filter: string) => void;
    children: React.ReactNode;
    className?: string;
}

function Filter() {
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get("genre");
    const router = useRouter();
    const pathName = usePathname();

    function handleFilter(filter: string): void {
        const params = new URLSearchParams(searchParams.toString());
        params.set("genre", filter);
        router.replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div className='border border-primary-800 flex'>
            <Button filter={'all'} handleFilter={handleFilter} activeFilter={activeFilter} className='px-5 py-2 hover:bg-blue-400 hover:text-white  '>
                All genre
            </Button>
            <Button filter={'Fiction'} handleFilter={handleFilter} activeFilter={activeFilter} className='px-5 py-2  hover:bg-blue-400 hover:text-white'>
                fiction
            </Button>
            <Button filter={'Fantasy'} handleFilter={handleFilter} activeFilter={activeFilter} className='px-5 py-2  hover:bg-blue-400 hover:text-white '>
                fantasy
            </Button>
        </div>
    );
}

const Button: React.FC<ButtonProps> = ({ activeFilter, filter, handleFilter, children, className }) => {
    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "text-primary-50 bg-primary-700" : ""} ${className}`}
            onClick={() => handleFilter(filter)}
        >
            {children}
        </button>
    );
}

export default Filter;
