import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

export default async function Footer() {
  const medsos = [
    {
      name: 'instragam',
      icons: <AiFillInstagram className='w-10 h-10' />,
      destination: 'https://www.instagram.com/minerva.rooms',
    },
    {
      name: 'facebook',
      icons: <BsFacebook className='w-10 h-10' />,
      destination: 'https://www.facebook.com/profile.php?id=100077761514287',
    },
    {
      name: 'tiktok',
      icons: <FaTiktok className='w-10 h-10' />,
      destination: 'https://www.tiktok.com/@minerva.rooms',
    },
  ];
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
    <footer className='w-full h-full overflow-hidden bg-[#F5F5F5] py-12 xl:py-20'>
      <div className='container mx-auto px-4 xl:px-6'>
        <div className='grid grid-cols-1 items-start justify-between sm:grid-cols-2 xl:grid-cols-4 gap-6'>
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
                Minerva Rooms
              </span>
            </div>
            <p className='text-sm text-secondaryColor font-light'>
              Butuh tempat tinggal dalam mingguan dengan harga terjangkau? Sewa
              apartemen weekly di Minerva Room’s adalah pilihan yang cocok untuk
              staycation kamu bersama orang tersayang!
            </p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-lg font-medium text-secondaryColor pb-2'>
              Contact
            </p>
            <CustomButton
              type='link'
              isExternal
              target='_blank'
              href='https://api.whatsapp.com/send?phone=6289689156131&text=Halo%20Minerva%20saya%20ingin%20nanya%20tentang%20rental%20apartement%20nya%20dong'
              className='min-w-[48px] min-h-[48px] text-sm font-normal text-tersierColor pb-2 md:text-base hover:text-primaryColor'>
              0896-8915-6131
            </CustomButton>
            <CustomButton
              type='link'
              isExternal
              target='_blank'
              href='mailto:minerva.rooms@gmail.com'
              className='min-w-[48px] min-h-[48px] text-sm font-normal text-tersierColor md:text-base  hover:text-primaryColor'>
              minerva.rooms@gmail.com
            </CustomButton>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-lg font-medium text-secondaryColor pb-2'>Menu</p>
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
          <div className='flex flex-col justify-end'>
            <p className='text-lg font-medium text-secondaryColor'>
              Ikuti Kami
            </p>
            <div className='flex items-center justify-start gap-x-3 xl:gap-x-4'>
              {medsos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-11 h-11'>
                    <CustomButton
                      type='link'
                      isExternal
                      ariaLabel={`kunjungi media sosial kami di ${item.name}`}
                      target='_blank'
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
