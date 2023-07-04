'use client';
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';
import Link from 'next/link';
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
        <Link
          href='/'
          className='flex items-center'>
          <Image
            className='sm:w-16 sm:h-16 xl:h-auto xl:w-auto'
            src='/minervalogo1.png'
            width={120}
            height={120}
            alt='Minerva Logo'
          />
          <span className='self-center whitespace-nowrap text-lg font-light sm:font-medium text-white sm:text-primaryColor sm:text-base xl:text-xl'>
            Minerva Rooms
          </span>
        </Link>

        <div className='flex'>
          <Navbar.Toggle
            className={`${
              path !== '/'
                ? 'text-primaryColor hover:text-white active:text-white'
                : 'text-white'
            }`}
          />
        </div>
        <Navbar.Collapse>
          <div className='flex flex-col xl:gap-y-4 xl:pl-4 sm:flex-row sm:gap-0 sm:pl-0 sm:gap-x-6'>
            {dataMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`min-w-[44px] min-h-[44px] md:min-w-fit md:min-h-fit active font-light sm:font-medium ${
                    path !== '/'
                      ? 'text-primaryColor font-medium'
                      : 'sm:nav-blur text-white'
                  }`}>
                  <CustomButton
                    className='capitalize '
                    type='link'
                    ariaLabel={`halaman ${item.name}`}
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
