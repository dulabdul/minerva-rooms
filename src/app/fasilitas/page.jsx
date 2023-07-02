import Image from 'next/image';
import React from 'react';

export default function page() {
  const fasilData = [
    {
      name: 'Skybridge to mall',
      imageUrl: '/images/fasilitas_skybridge.jpg',
    },
    {
      name: 'Swimming Pool',
      imageUrl: '/images/fasilitas_pool.jpg',
    },
    {
      name: 'fitness centre',
      imageUrl: '/images/fasilitas_gym.jpg',
    },
    {
      name: '24 hours security',
      imageUrl: '/images/fasilitas_security.jpg',
    },
    {
      name: 'secure parking',
      imageUrl: '/images/fasilitas_parking.jpg',
    },
  ];
  return (
    <section className='w-full overflow-hidden px-4 pb-24 pt-28 md:pt-40 md:pb-32'>
      <div className='container mx-auto'>
        <h3 className='text-secondaryColor font-semibold text-3xl py-2 text-center'>
          Fasilitas Kami
        </h3>
        <p className='text-center text-secondaryColor font-normal text-base'>
          Menginap di apartemen dengan fasilitas mewah gak harus mengeluarkan
          biaya yang mahal kok!
        </p>
        <p className='text-center text-secondaryColor font-normal text-base'>
          Kamu bisa menikmati pengalaman menginap di apartemen dengan fasilitas
          terlengkap.
        </p>
        <div className='flex flex-wrap w-full items-center justify-center'>
          {fasilData.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full h-full overflow-hidden py-4 xl:py-8'>
                <Image
                  className='w-full h-[250px] md:h-full object-cover object-center'
                  src={item.imageUrl}
                  alt={item.name}
                  width={400}
                  height={460}
                />
                <p className='text-secondaryColor text-center mt-2 font-medium text-xl xl:text-2xl capitalize'>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
