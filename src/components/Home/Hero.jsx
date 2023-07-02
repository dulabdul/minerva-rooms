import React from 'react';
import CustomButton from '../Button';
import Image from 'next/image';

export default function Hero({ exploreRef }) {
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  return (
    <section className='flex items-center'>
      <div className='w-full gap-y-5 sm:gap-y-2 xl:gap-y-5 min-h-[90vh] justify-center text-center sm:text-start flex flex-col inset-0 absolute sm:w-1/2 sm:relative sm:min-h-[auto] sm:pl-8 lg:pl-20 xl:pt-12 z-20'>
        <CustomButton
          className='button invisible sm:visible text-primaryColor hover:text-white w-1/2 xl:w-1/3 sm:text-sm xl:text-base'
          isTransparent
          isBlock
          isRounded>
          {' '}
          Minerva Rooms
        </CustomButton>
        <h1 className='text-2xl xl:text-4xl text-white sm:text-primaryColor font-semibold capitalize'>
          Temukan Tempat Untuk Transit Dengan Mudah
        </h1>
        <p className='text-white sm:text-secondaryColor text-sm font-normal'>
          Butuh tempat tinggal transit, harian, atau mingguan dengan harga
          terjangkau? Sewa apartemen di Minerva Room adalah pilihan yang cocok
          untuk staycation kamu bersama orang tersayang.
        </p>
        <div className='flex justify-center sm:justify-normal'>
          <CustomButton
            className='button text-white justify-center w-10/12 xl:w-1/3'
            type='button'
            onClick={() => handlerScroll(exploreRef?.current)}
            isBlock
            isPrimary
            isHover
            isFlex
            isRounded>
            {' '}
            Cek Selengkapnya
          </CustomButton>
        </div>
      </div>
      <div className='w-full sm:w-1/2 inset-0 sm:relative'>
        <div className='relative min-h-[90vh] sm:min-h-[auto]'>
          <div className='sm:invisible absolute inset-0 bg-black opacity-40 z-10 sm:rounded-bl-[80px]'></div>
          <Image
            className='absolute w-full h-full inset-0 sm:relative object-cover object-center sm:rounded-bl-[80px]'
            src='/images/hero_1.jpg'
            width={900}
            height={400}
            alt='Springlake Summarecon Hero'
          />
        </div>
      </div>
    </section>
  );
}
