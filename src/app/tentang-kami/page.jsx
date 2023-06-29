import Image from 'next/image';
import React from 'react';
import Location from '@/components/Card/Location';
export default function page() {
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
    <>
      <section className='w-full overflow-hidden px-4 pb-16 xl:pb-24 pt-28 md:pt-40'>
        <div className='container mx-auto'>
          <h3 className='text-secondaryColor font-semibold text-3xl py-2 text-center'>
            Tentang Kami
          </h3>
          <div className='grid grid-cols-1 items-start justify-center xl:grid-cols-2 py-8 gap-y-4 gap-x-8'>
            <div className='w-full h-full overflow-hidden'>
              <Image
                className='w-full h-full object-cover object-center'
                src='/images/tentang-kami.jpg'
                alt='Tentang Kami Minerva Rooms'
                width={500}
                height={500}
              />
            </div>
            <div>
              <h5 className='text-secondaryColor font-medium text-xl xl:text-2xl'>
                Staycation Hemat Fasilitas Lengkap
              </h5>
              <div className='flex flex-col h-full gap-y-3 xl:gap-y-6 py-2 xl:py-2'>
                <p className='text-secondaryColor font-normal text-sm xl:text-base'>
                  Berawal pada tahun 2021 sebagai salah satu penyedia layanan
                  penginapan di Kota Bekasi, yang dikelilingi pusat
                  perbelanjaan, kuliner, dan kebutuhan lengkap di sekitar area
                  penginapan.{' '}
                </p>
                <p className='text-secondaryColor font-normal text-sm xl:text-base'>
                  Minerva Room’s saat ini telah berkembang pesat dengan
                  menghadirkan beragam fasilitas menarik seperti Netflix,
                  kitchen set termasuk coffee & tea, free wifi, dan swimming
                  pool menambah pengalaman staycation kamu di Minerva Room’s.
                </p>
                <p className='text-secondaryColor font-normal text-sm xl:text-base'>
                  Menghadirkan durasi menginap yang fleksibel, mulai dari
                  transit perjam, fullday, mingguan, bahkan bulanan. Sangat
                  cocok untuk bersantai sejenak maupun menghabiskan waktu luang
                  yang berkesan.
                </p>
              </div>
            </div>
          </div>
          <h3 className='text-secondaryColor font-semibold text-3xl pt-12 xl:pt-16 pb-12 text-center'>
            Lokasi Kami
          </h3>
          <div className='grid grid-cols-1 items-center justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4'>
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
    </>
  );
}
