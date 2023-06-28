import React from 'react';
import CardApartement from '../Card/CardApartement';
import { AiOutlineWifi } from 'react-icons/ai';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { IoIosWater } from 'react-icons/io';
import { RiNetflixFill } from 'react-icons/ri';
import CustomButton from '../Button';

export default function Recommendation() {
  const apartData = [
    {
      title: 'Springlake summarecon',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      imageUrl: '/images/springlake-summarecon_overview.jpg',
      amenities: [
        {
          amenites: 'Free Netflix',
          icons: <RiNetflixFill />,
        },
        {
          amenites: 'Free Wifi',
          icons: <AiOutlineWifi />,
        },
        {
          amenites: 'LED TV',
          icons: <PiTelevisionSimpleBold />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      title: 'transpark juanda',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      imageUrl: '/images/transpark-juanda_overview.jpg',
      amenities: [
        {
          amenites: 'Free Netflix',
          icons: <RiNetflixFill />,
        },
        {
          amenites: 'Free Wifi',
          icons: <AiOutlineWifi />,
        },
        {
          amenites: 'LED TV',
          icons: <PiTelevisionSimpleBold />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      title: 'patraland urbano',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      imageUrl: '/images/patraland-urbano_overview.jpg',
      amenities: [
        {
          amenites: 'Free Netflix',
          icons: <RiNetflixFill />,
        },
        {
          amenites: 'Free Wifi',
          icons: <AiOutlineWifi />,
        },
        {
          amenites: 'LED TV',
          icons: <PiTelevisionSimpleBold />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      title: 'montblanc tbc',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      imageUrl: '/images/montblanc-tbc_overview.jpg',
      amenities: [
        {
          amenites: 'Free Netflix',
          icons: <RiNetflixFill />,
        },
        {
          amenites: 'Free Wifi',
          icons: <AiOutlineWifi />,
        },
        {
          amenites: 'LED TV',
          icons: <PiTelevisionSimpleBold />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      title: 'grand kamala lagoon',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      imageUrl: '/images/grand-kamala-lagoon_overview.jpg',
      amenities: [
        {
          amenites: 'Free Netflix',
          icons: <RiNetflixFill />,
        },
        {
          amenites: 'Free Wifi',
          icons: <AiOutlineWifi />,
        },
        {
          amenites: 'LED TV',
          icons: <PiTelevisionSimpleBold />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
  ];
  return (
    <section className='w-full overflow-hidden px-4 py-12 md:py-24'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-x-2'>
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
            Minerva&apos;s Rooms
          </h2>
        </div>
        <div>
          <h3 className='text-secondaryColor font-semibold text-3xl py-2 md:py-4'>
            Rekomendasi Kami
          </h3>
          <p className='text-sm text-secondaryColor font-light md:text-base'>
            Kamu bisa menikmati kamar yang bersih, wangi, dan steril serta
            dilengkapi dengan fasilitas menarik seperti free wifi, free Netflix.
          </p>
        </div>
        <div className='grid grid-cols-1 items-center justify-center sm:grid-cols-2 xl:grid-cols-3 py-12 gap-y-5 sm:gap-4'>
          {apartData.slice(0, 3).map((item, index) => {
            return (
              <CardApartement
                key={index}
                title={item.title}
                location={item.location}
                imagesUrl={item.imageUrl}
                price={item.price}
                amenities={item.amenities}
              />
            );
          })}
        </div>
        <div className='flex justify-center'>
          <CustomButton
            className='button text-white justify-center w-1/2 md:w-1/3'
            type='link'
            isRounded
            isPrimary
            isHover
            isFlex
            href='/'>
            Lihat Semua
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
