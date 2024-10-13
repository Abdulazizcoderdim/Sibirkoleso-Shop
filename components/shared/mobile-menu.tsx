import Link from 'next/link';
import { Icons } from '../icons';

export default function MobileMenu() {
  return (
    <div className="absolute w-full md:hidden top-[80px] min-h-96 right-0 left-0 pt-5 pb-10 bg-white shadow-sm">
      <div className="space-y-5">
        <div className="flex items-center justify-between border-b-2 pb-8">
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
        <div className="flex items-center justify-between border-b-2 pb-8">
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
      </div>
    </div>
  );
}
