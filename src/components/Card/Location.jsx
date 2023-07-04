import Image from 'next/image';
import React from 'react';

export default function Location({ imageUrl, location, title }) {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-full overflow-hidden'>
        <Image
          className='object-cover object-center w-full h-full'
          src={imageUrl}
          alt={title}
          width={375}
          height={375}
        />
      </div>
      <p className='font-medium text-lg text-secondaryColor capitalize mt-2 md:mt-4'>
        {title}
      </p>
      <p className='text-tersierColor font-light text-sm capitalize mt-1'>
        {location}
      </p>
    </div>
  );
}
