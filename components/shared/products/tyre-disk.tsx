'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import DiskProduct from '../disk-product/disk-product';
import MaxWidth from '../max-width';
import TyresProduct from '../tyres-product/tyres-product';

export default function TyreDisk() {
  const [active, setActive] = useState<'Шины' | 'Диски'>('Шины');
  return (
    <div>
      <div className="relative  bg-[#F5F6FB] gap-14 py-7 font-sans w-full text-center flex justify-center items-center">
        <button
          onClick={() => setActive('Шины')}
          title="Шины"
          type="button"
          className={cn('font-bold text-lg', active !== 'Шины' && 'opacity-50')}
        >
          Шины
        </button>
        <button
          onClick={() => setActive('Диски')}
          title="Диски"
          type="button"
          className={cn(
            'font-bold text-lg',
            active !== 'Диски' && 'opacity-50'
          )}
        >
          Диски
        </button>
        <div
          className={cn(
            'absolute transition-all duration-300 bg-dark -bottom-2 h-3 w-3 rotate-45',
            active === 'Шины' ? '-translate-x-14' : 'translate-x-14'
          )}
        />
      </div>
      <div className="bg-dark py-5 text-white">
        <MaxWidth>
          {active === 'Шины' ? <TyresProduct /> : <DiskProduct />}
        </MaxWidth>
      </div>
    </div>
  );
}
