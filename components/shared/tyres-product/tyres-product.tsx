'use client';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { TyresQuery } from '@/types';
import axios from 'axios';
import { CarFront, SlidersVertical, Snowflake, Sun } from 'lucide-react';
import { useEffect, useReducer, useState } from 'react';
import SelectCar from '../select-car';

interface TyresProductProps {
  width: number;
  height: number;
  diameter: string;
  manufacturer: string;
}

const reducer = (state: TyresProductProps, action) => {
  switch (action.type) {
    case 'width':
      return { ...state, width: action.payload };
    case 'height':
      return { ...state, height: action.payload };
    case 'diameter':
      return { ...state, diameter: action.payload };
    case 'manufacturer':
      return { ...state, manufacturer: action.payload };
    case 'clear':
      return { ...state, width: 0, height: 0, diameter: '', manufacturer: '' };
    default:
      return state;
  }
};

export default function TyresProduct() {
  const [state, dispatch] = useReducer(reducer, {
    width: 0,
    height: 0,
    diameter: '',
    manufacturer: '',
  });
  const [carParam, setCarParam] = useState<'По параметрам' | 'По автомобилям'>(
    'По параметрам'
  );
  const [weather, setWeather] = useState<
    'Летние шины' | 'Зимние шины' | 'Шипованные'
  >('Летние шины');
  const [tyres, setTyres] = useState<TyresQuery[]>([]);

  useEffect(() => {
    async function getTyres() {
      const res = await axios.get('/api/tyres');

      if (res.data.success) {
        setTyres(res.data.tyres);
      }
      console.log(res.data);
    }
    getTyres();
  }, []);

  async function getCar() {
    const res = await axios.post('/api/tyres', {
      width: state.width,
      height: state.height,
      diameter: state.diameter,
      manufacturer: state.manufacturer,
    });

    if (res.data.success) {
      setTyres(res.data.tyres);
    }

    console.log('widthhhh, ', res.data);
  }

  return (
    <div className="space-y-4 w-full">
      <div className="flex max-md:justify-between max-sm:flex-col max-sm:w-fit items-center justify-between gap-4">
        <div className="flex max-md:flex-col items-center gap-5">
          <div
            onClick={() => setCarParam('По параметрам')}
            className={cn(
              'flex items-center gap-3 cursor-pointer hover:opacity-100 transition',
              carParam !== 'По параметрам' && 'opacity-50'
            )}
          >
            <SlidersVertical className="w-5 h-5" />
            <p className="text-sm font-normal">По параметрам</p>
          </div>
          <div
            onClick={() => setCarParam('По автомобилям')}
            className={cn(
              'flex items-center gap-3 cursor-pointer hover:opacity-100 transition',
              carParam !== 'По автомобилям' && 'opacity-50'
            )}
          >
            <CarFront />
            <p className="text-sm font-normal">По автомобилям</p>
          </div>
        </div>
        <div className="max-sm:w-full">
          <SelectCar />
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 text-sm">
        <div className="bg-white group rounded-md md:max-w-64 w-full text-black">
          <p className="px-4 py-5 border-b group-hover:text-red">Ширина</p>
          <div className="overflow-auto h-72">
            {tyres.map((tyre, i) => (
              <p
                onClick={() => {
                  dispatch({ type: 'width', payload: tyre.width });
                  getCar();
                }}
                key={i}
                className="py-3 cursor-pointer text-neutral-600 px-4 hover:bg-neutral-200"
              >
                {tyre.width}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white group rounded-md md:max-w-64 w-full text-black">
          <p className="px-4 py-5 border-b group-hover:text-red">Высота</p>
          <div className="overflow-auto h-72">
            {tyres.map((tyre, i) => (
              <p
                onClick={() => {
                  dispatch({ type: 'height', payload: tyre.height });
                  getCar();
                }}
                key={i}
                className="py-3 cursor-pointer text-neutral-600 px-4 hover:bg-neutral-200"
              >
                {tyre.height}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white group rounded-md md:max-w-64 w-full text-black">
          <p className="px-4 py-5 border-b group-hover:text-red">Диаметр</p>
          <div className="overflow-auto h-72">
            {tyres.map((tyre, i) => {
              return (
                <p
                  onClick={() => {
                    dispatch({ type: 'diameter', payload: tyre.diameter });
                    getCar();
                  }}
                  key={i}
                  className="py-3 cursor-pointer text-neutral-600 px-4 hover:bg-neutral-200"
                >
                  {tyre.diameter}
                </p>
              );
            })}
          </div>
        </div>
        <div className="bg-white group rounded-md md:max-w-64 w-full text-black">
          <p className="px-4 py-5 border-b group-hover:text-red">
            Производитель
          </p>
          <div className="overflow-auto h-72">
            {tyres.map((tyre, i) => (
              <p
                onClick={() => {
                  dispatch({
                    type: 'manufacturer',
                    payload: tyre.manufacturer,
                  });
                  getCar();
                }}
                key={i}
                className="py-3 cursor-pointer text-neutral-600 px-4 hover:bg-neutral-200"
              >
                {tyre.manufacturer}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div
          onClick={() => setWeather('Летние шины')}
          className={cn(
            'flex cursor-pointer transition font-extralight text-sm hover:opacity-100 items-center gap-3',
            weather !== 'Летние шины' && 'opacity-50'
          )}
        >
          <Sun />
          Летние шины
        </div>
        <div
          onClick={() => setWeather('Зимние шины')}
          className={cn(
            'flex cursor-pointer transition font-extralight text-sm hover:opacity-100 items-center gap-3',
            weather !== 'Зимние шины' && 'opacity-50'
          )}
        >
          <Snowflake />
          Зимние шины
        </div>
        <div
          onClick={() => setWeather('Шипованные')}
          className={cn(
            'flex cursor-pointer transition font-extralight text-sm hover:opacity-100 items-center gap-3',
            weather !== 'Шипованные' && 'opacity-50'
          )}
        >
          <Icons.studded />
          Шипованные
        </div>
      </div>
    </div>
  );
}
