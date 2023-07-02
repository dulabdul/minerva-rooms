import React from 'react';
import CardApartement from '../Card/CardApartement';
import { AiOutlineWifi } from 'react-icons/ai';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { IoIosWater } from 'react-icons/io';
import { RiNetflixFill } from 'react-icons/ri';
import { FaBed, FaParking, FaPumpSoap, FaCity, FaShower } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { MdPool, MdFitnessCenter } from 'react-icons/md';
import { GiCctvCamera, GiArchBridge, GiTowel } from 'react-icons/gi';
import { BsFillLampFill } from 'react-icons/bs';
import CustomButton from '../Button';

export default function Recommendation({ exploreRef }) {
  const data = [
    {
      id: 1,
      title: 'Springlake summarecon',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      location:
        'Jl. Bulevar Ahmad Yani, Summarecon Bekasi, Marga Mulya, Bekasi Utara, Kota Bekasi, Jawa Barat 17143',
      imageUrls: [
        {
          id: 1,
          url: '/images/springlake-summarecon/overview.jpg',
        },
        {
          id: 2,
          url: '/images/springlake-summarecon/detail1.webp',
        },
        {
          id: 3,
          url: '/images/springlake-summarecon/detail2.webp',
        },
        {
          id: 4,
          url: '/images/springlake-summarecon/detail3.webp',
        },
        {
          id: 5,
          url: '/images/springlake-summarecon/detail4.webp',
        },
        {
          id: 6,
          url: '/images/springlake-summarecon/detail5.webp',
        },
        {
          id: 7,
          url: '/images/springlake-summarecon/detail6.webp',
        },
        {
          id: 8,
          url: '/images/springlake-summarecon/detail7.webp',
        },
        {
          id: 9,
          url: '/images/springlake-summarecon/detail8.webp',
        },
      ],
      fasilitas: [
        {
          name: '2 bedrooms',
          icons: <FaBed />,
        },
        {
          name: 'Swimming Pool',
          icons: <MdPool />,
        },
        {
          name: 'Fitness Centre',
          icons: <MdFitnessCenter />,
        },
        {
          name: 'Secure parking',
          icons: <FaParking />,
        },
        {
          name: '24/7 security',
          icons: <GiCctvCamera />,
        },
        {
          name: 'skybridge to mall',
          icons: <GiArchBridge />,
        },
      ],
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
        {
          amenites: 'Interior aesthetic',
          icons: <BsFillLampFill />,
        },
        {
          amenites: 'Shampo & bodywash',
          icons: <FaPumpSoap />,
        },
        {
          amenites: 'kitchen set',
          icons: <FaKitchenSet />,
        },
        {
          amenites: 'cityscape view',
          icons: <FaCity />,
        },
        {
          amenites: 'water heater',
          icons: <FaShower />,
        },
        {
          amenites: 'handuk',
          icons: <GiTowel />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      id: 2,
      title: 'transpark juanda',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      location:
        'Jl. Insinyur H. Juanda No.19, RT.003/RW.011, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113',
      imageUrls: [
        {
          id: 1,
          url: '/images/transpark-juanda/overview.jpg',
        },
        {
          id: 2,
          url: '/images/transpark-juanda/detail1.webp',
        },
        {
          id: 3,
          url: '/images/transpark-juanda/detail2.webp',
        },
        {
          id: 4,
          url: '/images/transpark-juanda/detail3.webp',
        },
        {
          id: 5,
          url: '/images/transpark-juanda/detail4.webp',
        },
        {
          id: 6,
          url: '/images/transpark-juanda/detail5.webp',
        },
        {
          id: 7,
          url: '/images/transpark-juanda/detail6.webp',
        },
        {
          id: 8,
          url: '/images/transpark-juanda/detail7.webp',
        },
        {
          id: 9,
          url: '/images/transpark-juanda/detail8.webp',
        },
      ],
      fasilitas: [
        {
          name: '2 bedrooms',
          icons: <FaBed />,
        },
        {
          name: 'Swimming Pool',
          icons: <MdPool />,
        },
        {
          name: 'Fitness Centre',
          icons: <MdFitnessCenter />,
        },
        {
          name: 'Secure parking',
          icons: <FaParking />,
        },
        {
          name: '24/7 security',
          icons: <GiCctvCamera />,
        },
        {
          name: 'skybridge to mall',
          icons: <GiArchBridge />,
        },
      ],
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
        {
          amenites: 'Interior aesthetic',
          icons: <BsFillLampFill />,
        },
        {
          amenites: 'Shampo & bodywash',
          icons: <FaPumpSoap />,
        },
        {
          amenites: 'kitchen set',
          icons: <FaKitchenSet />,
        },
        {
          amenites: 'cityscape view',
          icons: <FaCity />,
        },
        {
          amenites: 'water heater',
          icons: <FaShower />,
        },
        {
          amenites: 'handuk',
          icons: <GiTowel />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      id: 3,
      title: 'patraland urbano',
      location: 'bekasi, jawa barat',
      price: '150,000 / 3 jam',
      location:
        'Jl. Pintu Air No.29, RT.002/RW.001, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17142',
      imageUrls: [
        {
          id: 1,
          url: '/images/patraland-urbano/overview.jpg',
        },
        {
          id: 2,
          url: '/images/patraland-urbano/detail1.webp',
        },
        {
          id: 3,
          url: '/images/patraland-urbano/detail2.webp',
        },
        {
          id: 4,
          url: '/images/patraland-urbano/detail3.webp',
        },
        {
          id: 5,
          url: '/images/patraland-urbano/detail4.webp',
        },
        {
          id: 6,
          url: '/images/patraland-urbano/detail5.webp',
        },
        {
          id: 7,
          url: '/images/patraland-urbano/detail6.webp',
        },
        {
          id: 8,
          url: '/images/patraland-urbano/detail7.webp',
        },
        {
          id: 9,
          url: '/images/patraland-urbano/detail8.webp',
        },
      ],
      fasilitas: [
        {
          name: '2 bedrooms',
          icons: <FaBed />,
        },
        {
          name: 'Swimming Pool',
          icons: <MdPool />,
        },
        {
          name: 'Fitness Centre',
          icons: <MdFitnessCenter />,
        },
        {
          name: 'Secure parking',
          icons: <FaParking />,
        },
        {
          name: '24/7 security',
          icons: <GiCctvCamera />,
        },
        {
          name: 'skybridge to mall',
          icons: <GiArchBridge />,
        },
      ],
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
        {
          amenites: 'Interior aesthetic',
          icons: <BsFillLampFill />,
        },
        {
          amenites: 'Shampo & bodywash',
          icons: <FaPumpSoap />,
        },
        {
          amenites: 'kitchen set',
          icons: <FaKitchenSet />,
        },
        {
          amenites: 'cityscape view',
          icons: <FaCity />,
        },
        {
          amenites: 'water heater',
          icons: <FaShower />,
        },
        {
          amenites: 'handuk',
          icons: <GiTowel />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      id: 4,
      title: 'montblanc BTC',
      location:
        'Jl. HM. Joyo Martono No.30, RT.003/RW.021, Jatimulya, Kec. Bekasi Timur, Bekasi Timur, Bekasi, Jawa Barat, Indonesia, 17113',
      price: '150,000 / 3 jam',
      imageUrls: [
        {
          id: 1,
          url: '/images/montblanc-tbc/overview.jpg',
        },
        {
          id: 2,
          url: '/images/montblanc-tbc/detail1.webp',
        },
        {
          id: 3,
          url: '/images/montblanc-tbc/detail2.webp',
        },
        {
          id: 4,
          url: '/images/montblanc-tbc/detail3.webp',
        },
        {
          id: 5,
          url: '/images/montblanc-tbc/detail4.webp',
        },
        {
          id: 6,
          url: '/images/montblanc-tbc/detail5.webp',
        },
        {
          id: 7,
          url: '/images/montblanc-tbc/detail6.webp',
        },
        {
          id: 8,
          url: '/images/montblanc-tbc/detail7.webp',
        },
        {
          id: 9,
          url: '/images/montblanc-tbc/detail8.webp',
        },
      ],
      fasilitas: [
        {
          name: '2 bedrooms',
          icons: <FaBed />,
        },
        {
          name: 'Swimming Pool',
          icons: <MdPool />,
        },
        {
          name: 'Fitness Centre',
          icons: <MdFitnessCenter />,
        },
        {
          name: 'Secure parking',
          icons: <FaParking />,
        },
        {
          name: '24/7 security',
          icons: <GiCctvCamera />,
        },
        {
          name: 'skybridge to mall',
          icons: <GiArchBridge />,
        },
      ],
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
        {
          amenites: 'Interior aesthetic',
          icons: <BsFillLampFill />,
        },
        {
          amenites: 'Shampo & bodywash',
          icons: <FaPumpSoap />,
        },
        {
          amenites: 'kitchen set',
          icons: <FaKitchenSet />,
        },
        {
          amenites: 'cityscape view',
          icons: <FaCity />,
        },
        {
          amenites: 'water heater',
          icons: <FaShower />,
        },
        {
          amenites: 'handuk',
          icons: <GiTowel />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
    {
      id: 5,
      title: 'grand kamala lagoon',
      location:
        'Jl. KH Noer Ali, Kawasan Grand Kamala Lagoon · Pekayon Jaya, Bekasi Selatan, 17148',
      price: '150,000 / 3 jam',
      imageUrls: [
        {
          id: 1,
          url: '/images/grand-kamala-lagoon/overview.jpg',
        },
        {
          id: 2,
          url: '/images/grand-kamala-lagoon/detail1.webp',
        },
        {
          id: 3,
          url: '/images/grand-kamala-lagoon/detail2.webp',
        },
        {
          id: 4,
          url: '/images/grand-kamala-lagoon/detail3.webp',
        },
        {
          id: 5,
          url: '/images/grand-kamala-lagoon/detail4.webp',
        },
        {
          id: 6,
          url: '/images/grand-kamala-lagoon/detail5.webp',
        },
        {
          id: 7,
          url: '/images/grand-kamala-lagoon/detail6.webp',
        },
        {
          id: 8,
          url: '/images/grand-kamala-lagoon/detail7.webp',
        },
        {
          id: 9,
          url: '/images/grand-kamala-lagoon/detail8.webp',
        },
      ],
      fasilitas: [
        {
          name: '2 bedrooms',
          icons: <FaBed />,
        },
        {
          name: 'Swimming Pool',
          icons: <MdPool />,
        },
        {
          name: 'Fitness Centre',
          icons: <MdFitnessCenter />,
        },
        {
          name: 'Secure parking',
          icons: <FaParking />,
        },
        {
          name: '24/7 security',
          icons: <GiCctvCamera />,
        },
        {
          name: 'skybridge to mall',
          icons: <GiArchBridge />,
        },
      ],
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
        {
          amenites: 'Interior aesthetic',
          icons: <BsFillLampFill />,
        },
        {
          amenites: 'Shampo & bodywash',
          icons: <FaPumpSoap />,
        },
        {
          amenites: 'kitchen set',
          icons: <FaKitchenSet />,
        },
        {
          amenites: 'cityscape view',
          icons: <FaCity />,
        },
        {
          amenites: 'water heater',
          icons: <FaShower />,
        },
        {
          amenites: 'handuk',
          icons: <GiTowel />,
        },
        {
          amenites: 'Dispenser',
          icons: <IoIosWater />,
        },
      ],
    },
  ];
  return (
    <section
      ref={exploreRef}
      className='w-full overflow-hidden px-4 py-12 md:py-24'>
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
            Minerva Rooms
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
          {data.slice(0, 3).map((item, index) => {
            return (
              <CardApartement
                key={index}
                title={item.title}
                location={item.location}
                imagesUrls={item.imageUrls}
                price={item.price}
                amenities={item.amenities}
                id={item.id}
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
            href='/properti'>
            Lihat Semua
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
