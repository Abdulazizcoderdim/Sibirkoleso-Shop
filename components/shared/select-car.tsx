import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Car, ChevronDown, Truck } from 'lucide-react';
import { useState } from 'react';
import { PiMotorcycleFill } from 'react-icons/pi';

export default function SelectCar() {
  const [avto, setAvto] = useState<
    'Легковые авто' | 'Грузовые авто' | 'Мото-квадро'
  >('Легковые авто');
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onClick={() => setOpen(!open)}
        className="flex max-md:w-full max-md:justify-between items-center font-extralight text-sm"
      >
        {avto} <ChevronDown className="ml-2 h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent>
        <div
          onClick={() => {
            setAvto('Легковые авто');
            setOpen(false);
          }}
          className="flex hover:text-black transition text-sm text-neutral-500 items-center px-2 py-3 gap-2 hover:bg-neutral-100 cursor-pointer"
        >
          <Car />
          Легковые авто
        </div>
        <div
          onClick={() => {
            setAvto('Грузовые авто');
            setOpen(false);
          }}
          className="flex hover:text-black transition text-sm text-neutral-500 items-center px-2 border-t py-3 gap-2 hover:bg-neutral-100 cursor-pointer"
        >
          <Truck />
          Грузовые авто
        </div>
        <div
          onClick={() => {
            setAvto('Мото-квадро');
            setOpen(false);
          }}
          className="flex hover:text-black tr ansition text-sm text-neutral-500 items-center px-2 border-t py-3 gap-2 hover:bg-neutral-100 cursor-pointer"
        >
          <PiMotorcycleFill className="w-6 h-6" />
          Мото-квадро
        </div>
      </PopoverContent>
    </Popover>
  );
}
