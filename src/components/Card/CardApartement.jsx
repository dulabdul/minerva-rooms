import Image from 'next/image';
import React from 'react';

import CustomButton from '../Button';

export default function CardApartement({
  title,
  imagesUrls,
  price,
  amenities,
  id,
}) {
  return (
    <div className='bg-[#FEFEFF] border border-[#DEDCDA] shadow-md w-full h-full overflow-hidden'>
      <div className='w-full h-[215px] xl:h-[275px]'>
        <Image
          className='object-cover object-center w-full h-full'
          alt={title}
          width={350}
          height={350}
          src={imagesUrls[0].url}
        />
      </div>
      <div className='px-3 py-4'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-secondaryColor font-medium text-lg md:text-xl capitalize'>
            {title}
          </h4>
          <p className='text-tersierColor text-sm font-light capitalize'>
            bekasi, jawa barat
          </p>
        </div>
        <div className='grid grid-cols-2 gap-y-3 py-4'>
          {amenities.slice(0, 4).map((item, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-start gap-x-1'>
                <div className='w-10 text-4xl text-primaryColor'>
                  {item.icons}
                </div>
                <p className='text-sm text-secondaryColor font-normal sm:text-base'>
                  {item.amenites}
                </p>
              </div>
            );
          })}
        </div>
        <p className='text-sm sm:text-base font-light text-tersierColor pb-2'>
          Start from Rp{price}
        </p>
        <hr className='block text-tersierColor' />
        <div className='flex flex-col items-center justify-center w-full pt-4 gap-y-4'>
          <CustomButton
            className='button text-white text-center justify-center'
            href={`https://api.whatsapp.com/send?phone=6289689156131&text=Halo%20minerva%20saya%20ingin%20rental%20apartement%20${title}%20dong`}
            isRounded
            isExternal
            target='_blank'
            ariaLabel='Rental sekarang'
            isPrimary
            isHover
            isFull
            isFlex
            type='link'>
            Rental Sekarang
          </CustomButton>
          <CustomButton
            className='button text-primaryColor text-center justify-center hover:text-white'
            href={`/detail/${id}`}
            isRounded
            isTransparent
            ariaLabel={`kunjungi halaman detail ${title}`}
            isFull
            isFlex
            type='link'>
            Detail
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
