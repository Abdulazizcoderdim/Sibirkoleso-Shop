'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Icons } from '../icons';
import MaxWidth from './max-width';

export default function DropdownnMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="max-md:hidden">
        <div
          onClick={() => setOpenMenu(prev => !prev)}
          className="flex items-center gap-3 cursor-pointer group"
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
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <MaxWidth className="py-10 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="group ">
              <Icons.tire className="group-hover:text-red cursor-pointer w-20 h-20 transition-all duration-200" />
              <div className="space-y-2">
                <h1 className="group-hover:text-red text-xl font-bold transition-all duration-200">
                  Шины
                </h1>
                <p>38 295 моделей</p>
              </div>
            </div>
            <div className="group ">
              <Icons.disk className="group-hover:text-red cursor-pointer w-20 h-20 transition-all duration-200" />
              <div className="space-y-2">
                <h1 className="group-hover:text-red text-xl font-bold transition-all duration-200">
                  Диски
                </h1>
                <p>10 453 модели</p>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-40 bg-neutral-300" />
          <div className="flex items-center justify-between gap-20">
            <div className="gap-3 text-sm text-neutral-900 flex flex-col">
              <Link
                href={'#'}
                className="hover:text-red transition-all duration-300"
              >
                О компании
              </Link>
              <Link
                href={'#'}
                className="hover:text-red transition-all duration-300"
              >
                Франшиза
              </Link>
              <Link
                href={'#'}
                className="hover:text-red transition-all duration-300"
              >
                Контакты
              </Link>
              <Link
                href={'#'}
                className="hover:text-red transition-all duration-300"
              >
                Блог
              </Link>
            </div>
            <div className="">
              <div className="gap-3 text-sm text-neutral-900 flex flex-col">
                <Link
                  href={'#'}
                  className="hover:text-red transition-all duration-300"
                >
                  Кредит
                </Link>
                <Link
                  href={'#'}
                  className="hover:text-red transition-all duration-300"
                >
                  Оплата
                </Link>
                <Link
                  href={'#'}
                  className="hover:text-red transition-all duration-300"
                >
                  Доставка
                </Link>
                <Link
                  href={'#'}
                  className="hover:text-red transition-all duration-300"
                >
                  Сервис
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-neutral-500 text-sm">Единая справочная</p>
            <p className="text-xl font-bold">8 800 775-10-50</p>
            <p className="text-sm">+7 (383) 388-55-32</p>
          </div>
        </MaxWidth>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
