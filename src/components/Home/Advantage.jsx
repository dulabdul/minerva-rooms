import React from 'react';
import { BsCurrencyDollar, BsCalendar3, BsFillMapFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdApartment, MdSecurity } from 'react-icons/md';

export default function Advantage() {
  const arrayAdvantage = [
    {
      text: 'Harga sangat terjangkau, mulai dari Rp100rb',
      icons: <BsCurrencyDollar className='text-primaryColor' />,
    },
    {
      text: 'Fasilitas lengkap dan memadai untuk segala kegiatan',
      icons: <AiFillCheckCircle className='text-primaryColor' />,
    },
    {
      text: 'Pilihan durasi penyewaan yang beragam, mulai dari perjam, harian, mingguan, bulanan, hingga tahunan',
      icons: <BsCalendar3 className='text-primaryColor' />,
    },
    {
      text: 'Kamar langsung dari tangan pertama Dikelola oleh tim profesional dan responsif',
      icons: <MdApartment className='text-primaryColor' />,
    },
    {
      text: 'Keamanan privasi terjaga 100%',
      icons: <MdSecurity className='text-primaryColor' />,
    },
    {
      text: 'Lokasi strategis dekat pusat perbelanjaan, sentra kuliner, pusat pendidikan, pusat kesehatan & kebugaran Transportasi publik yang mudah dijangkau',
      icons: <BsFillMapFill className='text-primaryColor' />,
    },
  ];

  return (
    <section className='w-full h-full overflow-hidden py-12 md:py-24 bg-[#F5F5F5]'>
      <div className='container mx-auto px-4 flex flex-col'>
        <div className='py-8 flex gap-x-2 items-center'>
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
            Keunggulan Kami
          </h2>
        </div>
        <h3 className='text-secondaryColor font-semibold text-3xl'>
          Keunggulan Yang Kami Berikan
        </h3>
        <div className='grid grid-cols-1 justify-center items-center py-8 sm:grid-cols-2 xl:grid-cols-3 gap-y-4'>
          {arrayAdvantage.map((item, index) => {
            return (
              <div
                key={index}
                className='flex items-center gap-x-2 md:gap-x-4'>
                <div className='w-11 h-11 md:w-12 md:h-12 text-4xl sm:text-5xl'>
                  {item.icons}
                </div>
                <p className='text-secondaryColor font-normal text-sm sm:text-base'>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
