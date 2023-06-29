import CardApartement from '@/components/Card/CardApartement';
import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { IoIosWater } from 'react-icons/io';
import { RiNetflixFill } from 'react-icons/ri';
import Image from 'next/image';
import Testimonial from '@/components/Home/Testimonial';

export default function PropertiPages() {
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
    <>
      <section className='w-full overflow-hidden px-4 pb-6 pt-28 md:pt-40'>
        <div className='container mx-auto'>
          <h3 className='text-secondaryColor font-semibold text-3xl py-6 xl:py-12 text-center'>
            Properti Kami
          </h3>
          <div className='grid grid-cols-1 items-center justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4 pt-6 pb-12'>
            {apartData.map((item, index) => {
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
          <div className='grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-y-4 gap-x-8 py-12 xl:py-24'>
            <div className='w-full h-full overflow-hidden'>
              <Image
                className='object-cover object-center w-full h-full'
                src='/images/properti_image.jpg'
                alt='Properti Banner'
                width={400}
                height={400}
              />
            </div>
            <div className='flex flex-col h-full gap-y-4 xl:gap-y-8'>
              <h5 className='font-medium text-2xl md:text-4xl capitalize text-primaryColor'>
                Mau Sewa Apartement?
              </h5>
              <div className='flex flex-col gap-y-4 xl:gap-y-5 tracking-widest'>
                <p className='text-secondaryColor font-light text-base xl:text-lg'>
                  Minerva’s Room memiliki tipe 2BR ataupun Studio apart
                </p>
                <p className='text-secondaryColor font-light text-base xl:text-lg'>
                  Di sini, kamu bisa menikmati fleksibilitas yang luar biasa
                  dengan pilihan sewa 3jam, 6jam,12jam,fullday, bahkan mingguan
                  hingga bulanan.
                </p>
                <p className='text-secondaryColor font-light text-base xl:text-lg'>
                  majinasikan diri kamu tinggal di apartemen idaman kamu sesuka
                  hati, tanpa perlu khawatir tentang masa sewa yang pendek.
                </p>
                <p className='text-secondaryColor font-light text-base xl:text-lg'>
                  Yuk segera dapatkan pengalaman tinggal yang maksimal dengan
                  pilihan sewa yang beragam di sini!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
}
