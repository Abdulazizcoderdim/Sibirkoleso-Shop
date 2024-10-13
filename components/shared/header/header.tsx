'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import DropdownnMenu from '../dropdown-menu';
import MaxWidth from '../max-width';
import MobileMenu from '../mobile-menu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const cart = false;
  return (
    <MaxWidth className="border-b">
      <header className="flex relative items-center justify-between gap-3 py-6">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={'/logo.svg'} width={33} height={33} alt="logo" />
            <h1 className="text-xl font-bold font-sans">Сибирь Колесо</h1>
          </div>
          <div className="w-[1px] h-8 bg-zinc-300 max-md:hidden" />
          <DropdownnMenu />
        </div>
        <div className="flex items-center gap-10 max-md:hidden">
          {cart ? (
            <div className="relative group cursor-pointer select-none text-center">
              <BsHandbag className="w-5 h-5 group-hover:text-red transition" />
              <div className="absolute right-0 left-0 bg-red text-white rounded-full text-sm top-4">
                0
              </div>
            </div>
          ) : (
            <BsHandbag className="w-5 opacity-50 h-5" />
          )}
          <GoPerson className="w-5 h-5 cursor-pointer" />
        </div>
        {/* mobile */}
        <div
          onClick={() => setOpenMenu(prev => !prev)}
          className="flex items-center gap-3 cursor-pointer group md:hidden"
        >
          {openMenu ? (
            <X className="w-7 h-7 group-hover:text-red transition-all duration-200" />
          ) : (
            <div className="space-y-1 ">
              <div className="h-0.5 w-5 bg-black group-hover:bg-red transition-all duration-200 rounded-md" />
              <div className="h-0.5 w-5 bg-black group-hover:bg-red transition-all duration-200 rounded-md" />
              <div className="h-[2.5px] w-5 group-hover:w-3 bg-black group-hover:bg-red transition-all duration-300 rounded-md" />
            </div>
          )}
          <p className="text-[13px] select-none group-hover:text-red transition-all duration-200">
            Меню
          </p>
        </div>
        {openMenu && <MobileMenu />}
      </header>
    </MaxWidth>
  );
}
