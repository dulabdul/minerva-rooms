import React from 'react';
import { BiSolidQuoteLeft } from 'react-icons/bi';
export default function CardTestimonial({ name, job, review }) {
  return (
    <div className='border border-[#DEDCDA] shadow-sm px-3 py-6'>
      <BiSolidQuoteLeft className='text-[#DEDCDA] text-5xl' />
      <div className='flex flex-col py-4 '>
        <p className='text-secondaryColor font-normal text-base xl:text-lg'>
          {review}
        </p>
        <p className='text-secondaryColor text-base font-normal pt-4 pb-1 capitalize'>
          {name}
        </p>
        <p className='text-tersierColor font-light text-sm capitalize'>{job}</p>
      </div>
    </div>
  );
}
