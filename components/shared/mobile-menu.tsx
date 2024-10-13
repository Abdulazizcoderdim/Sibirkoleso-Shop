import Image from 'next/image';

export default function MobileMenu() {
  return (
    <div className="absolute w-full md:hidden top-[80px] min-h-96 right-0 left-0 pt-5 bg-white shadow-sm">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-7">
            <Image src={'/svg/tire.svg'} alt="tyre" width={40} height={40} />
            <div className="space-y-2">
              <h1>Шины</h1>
              <p>38 295 моделей</p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
