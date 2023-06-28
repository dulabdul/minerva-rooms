import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
export default function Footer() {
  const dataMenu = [
    {
      name: 'home',
      destination: '/',
    },
    {
      name: 'properti',
      destination: '/',
    },
    {
      name: 'Fasilitas',
      destination: '/',
    },
    {
      name: 'Tentang Kami',
      destination: '/',
    },
    {
      name: 'kontak',
      destination: '/',
    },
  ];
  const medsos = [
    {
      icons: <AiFillInstagram className='w-10 h-10' />,
      destination: '/',
    },
    {
      icons: <BsFacebook className='w-10 h-10' />,
      destination: '/',
    },
    {
      icons: <FaTiktok className='w-10 h-10' />,
      destination: '/',
    },
  ];
  return (
    <footer className='w-full h-full overflow-hidden bg-[#F5F5F5] py-12 xl:py-20'>
      <div className='container mx-auto px-4 xl:px-6'>
        <div className='grid grid-cols-1 items-start justify-center sm:grid-cols-2 xl:grid-cols-4 gap-6'>
          <div className='flex flex-col justify-start'>
            <div className='flex items-center'>
              <Image
                className='sm:w-16 sm:h-16 xl:h-auto xl:w-auto'
                src='/minervalogo1.png'
                width={80}
                height={80}
                alt='Minerva Logo'
              />
              <span className='self-center whitespace-nowrap text-lg font-light sm:font-medium text-primaryColor sm:text-base xl:text-xl'>
                Minerva&apos;s Rooms
              </span>
            </div>
            <p className='text-sm text-secondaryColor font-light'>
              Butuh tempat tinggal dalam mingguan dengan harga terjangkau? Sewa
              apartemen weekly di Minerva Room’s adalah pilihan yang cocok untuk
              staycation kamu bersama orang tersayang!
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <h6 className='text-lg font-medium text-secondaryColor pb-2'>
              Contact
            </h6>
            <p className='text-sm font-normal text-tersierColor pb-2 md:text-base'>
              0896-7529-3838
            </p>
            <p className='text-sm font-normal text-tersierColor md:text-base'>
              minerva.rooms@gmail.com
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <h6 className='text-lg font-medium text-secondaryColor pb-2'>
              Menu
            </h6>
            {dataMenu.map((item, index) => {
              return (
                <CustomButton
                  key={index}
                  type='link'
                  href={item.destination}
                  className='text-tersierColor mb-2 font-normal hover:text-primaryColor transition-all capitalize'>
                  {item.name}
                </CustomButton>
              );
            })}
          </div>
          <div className='flex flex-col justify-start'>
            <h6 className='text-lg font-medium text-secondaryColor'>
              Ikuti Kami
            </h6>
            <div className='flex items-center justify-start gap-x-3 xl:gap-x-4'>
              {medsos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-11 h-11'>
                    <CustomButton
                      type='link'
                      href={item.destination}
                      className='text-primaryColor transition hover:text-secondaryColor'>
                      {item.icons}
                    </CustomButton>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
