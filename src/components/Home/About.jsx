import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';

export default function About() {
  return (
    <section className='overflow-hidden w-full h-full pt-6 md:pt-16 pb-12 md:pb-24 px-4'>
      <div className='container mx-auto '>
        <div className='flex items-center gap-x-2 py-2'>
          <svg
            width='72'
            height='16'
            viewBox='0 0 102 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z'
              fill='#C07F00'
            />
          </svg>
          <h2 className='font-normal text-primaryColor text-xl'>
            Tentang Kami
          </h2>
        </div>
        <div className='w-full flex flex-col gap-y-8 justify-center items-center overflow-hidden sm:flex-row'>
          <div className='w-full sm:w-1/2'>
            <h3 className='text-secondaryColor font-semibold text-3xl py-2'>
              Nilai yang kami berikan
            </h3>
            <Image
              className='w-auto h-auto xl:h-[438px] transition-all hover:scale-95 ease-in-out hover:z-10'
              src='/images/about1.jpg'
              width={300}
              height={438}
              alt='Patraland Urbano Tentang Kami'
            />
          </div>
          <div className='w-full sm:w-1/2'>
            <Image
              className='w-auto h-auto xl:h-[438px] transition-all hover:scale-95 ease-in-out hover:z-10'
              alt='Transpark Juanda Tentang Kami'
              src='/images/about2.jpg'
              width={300}
              height={438}
            />
            <p className='font-light text-base text-secondaryColor my-4'>
              Berawal pada tahun 2021 sebagai salah satu penyedia layanan
              penginapan di Kota Bekasi, yang dikelilingi pusat perbelanjaan,
              kuliner, dan kebutuhan lengkap di sekitar area penginapan.
            </p>
            <CustomButton
              className='button text-white w-2/3 sm:w-1/3'
              isRounded
              isPrimary
              isBlock
              isHover
              href='/tentang-kami'
              type='link'>
              Baca Lebih Lanjut
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
