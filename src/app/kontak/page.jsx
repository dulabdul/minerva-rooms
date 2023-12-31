import CustomButton from '@/components/Button';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import Location from '@/components/Card/Location';
export default function page() {
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
  const locationData = [
    {
      title: 'Springlake Summarecon',
      imageUrl: '/images/location_springlake_summarecon.jpg',
      location:
        'Jl. Bulevar Ahmad Yani, Summarecon Bekasi, Marga Mulya, Bekasi Utara, Kota Bekasi, Jawa Barat 17143',
    },
    {
      title: 'Grand Kamala Lagoon',
      imageUrl: '/images/location_grand_kamalaa_lagoon.jpg',
      location:
        'Jl. KH Noer Ali, Kawasan Grand Kamala Lagoon · Pekayon Jaya, Bekasi Selatan, 17148',
    },
    {
      title: 'Transpark Juanda',
      imageUrl: '/images/location_transparkjuanda.jpg',
      location:
        'Jl. Insinyur H. Juanda No.19, RT.003/RW.011, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113',
    },
    {
      title: 'Patraland Urbano',
      imageUrl: '/images/location_patraland_urbano.jpg',
      location:
        'Jl. Pintu Air No.29, RT.002/RW.001, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17142',
    },
    {
      title: 'Mont Blanc BTC',
      imageUrl: '/images/location_montblanc_tbc.jpg',
      location:
        'Jl. HM. Joyo Martono No.30, RT.003/RW.021, Jatimulya, Kec. Bekasi Timur, Bekasi Timur, Bekasi, Jawa Barat, Indonesia',
    },
  ];
  return (
    <section className='w-full overflow-hidden px-4 pb-16 xl:pb-24 pt-32 md:pt-40'>
      <div className='container mx-auto'>
        <h3 className='text-secondaryColor font-semibold text-3xl py-2 text-center'>
          Hubungi Kami
        </h3>
        <p className='text-secondaryColor font-light text-sm xl:text-base text-center'>
          Kami tersedia untuk menjawab pertanyaan Anda. Jangan sungkan untuk
          menghubungi tim kami.
        </p>
        <div className='flex flex-col items-center justify-center pt-12 gap-y-1'>
          <p className='font-medium text-lg xl:text-2xl text-tersierColor'>
            Telepon / Whatsapp
          </p>
          <CustomButton
            className='text-secondaryColor font-light text-base xl:text-xl hover:text-primaryColor min-w-[48px] min-h-[48px]'
            href='https://api.whatsapp.com/send?phone=6289689156131&text=Halo%20Minerva%20saya%20ingin%20nanya%20tentang%20rental%20apartement%20nya%20dong'
            type='link'
            ariaLabel='Hubungi whatsapp official kami'
            isExternal
            target='_blank'>
            +6289689156131
          </CustomButton>
        </div>
        <div className='flex flex-col items-center justify-center pt-4 gap-y-1'>
          <p className='font-medium text-lg xl:text-xl text-tersierColor'>
            E-Mail
          </p>
          <CustomButton
            className='text-secondaryColor font-light text-base xl:text-xl hover:text-primaryColor min-w-[48px] min-h-[48px]'
            href='mailto:minerva.rooms@gmail.com'
            type='link'
            ariaLabel='Hubungi email official kami'
            isExternal
            target='_blank'>
            minerva.rooms@gmail.com
          </CustomButton>
        </div>
        <div className='flex flex-col items-center justify-center pt-4 gap-y-1 '>
          <p className='font-medium text-lg xl:text-xl text-tersierColor'>
            Media Sosial
          </p>
          <div className='flex flex-row gap-x-2 pt-4'>
            {medsos.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-11 h-11'>
                  <CustomButton
                    type='link'
                    isExternal
                    target='_blank'
                    ariaLabel={`kunjungi media sosial kami di ${item.name}`}
                    href={item.destination}
                    className='text-primaryColor transition hover:text-secondaryColor'>
                    {item.icons}
                  </CustomButton>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className='text-secondaryColor font-semibold text-3xl pt-12 xl:pt-16 pb-6 text-center'>
          Lokasi Kami
        </h3>
        <div className='grid grid-cols-1 items-center justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4 '>
          {locationData.map((item, index) => {
            return (
              <Location
                title={item.title}
                location={item.location}
                imageUrl={item.imageUrl}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
