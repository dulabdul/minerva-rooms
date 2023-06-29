'use client';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  const dataMenu = [
    {
      name: 'home',
      destination: '/',
    },
    {
      name: 'properti',
      destination: '/properti',
    },
    {
      name: 'Fasilitas',
      destination: '/fasilitas',
    },
    {
      name: 'Tentang Kami',
      destination: '/tentang-kami',
    },
    {
      name: 'kontak',
      destination: '/kontak',
    },
  ];
  return (
    <header className='w-full top-0 z-50 absolute scrolled sm:no-scrolled'>
      <Navbar
        className='container mx-auto bg-transparent'
        fluid
        rounded>
        <Navbar.Brand href='https://flowbite-react.com'>
          <Image
            className='sm:w-16 sm:h-16 xl:h-auto xl:w-auto'
            src='/minervalogo1.png'
            width={120}
            height={120}
            alt='Minerva Logo'
          />
          <span className='self-center whitespace-nowrap text-lg font-light sm:font-medium text-white sm:text-primaryColor sm:text-base xl:text-xl'>
            Minerva&apos;s Rooms
          </span>
        </Navbar.Brand>
        <div className='flex'>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='text-white'>
          <div className='flex flex-col xl:gap-y-4 xl:pl-4 sm:flex-row sm:gap-0 sm:pl-0 sm:gap-x-6'>
            {dataMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`active font-light sm:font-medium ${
                    path !== '/' ? 'text-primaryColor' : 'sm:nav-blur'
                  }`}>
                  <CustomButton
                    className='capitalize'
                    type='link'
                    href={item.destination}>
                    {item.name}
                  </CustomButton>
                </li>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
