'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CustomButton from '../Button';

export default function CardDetail({
  title,
  imageUrls,
  fasilitas,
  location,
  price,
  amenities,
}) {
  const [slider, setSlider] = useState(imageUrls?.[0].url);
  const [selectRoom, setSelectedRoom] = useState('studio');
  const [selectDuration, setSelectDuration] = useState(undefined);
  const handleChangeRoom = (e) => {
    setSelectedRoom(e.target.value);
  };
  const handleChangeDuration = (e) => {
    setSelectDuration(e.target.value);
  };
  const parseJSON = !selectDuration ? '' : JSON.parse(selectDuration);

  return (
    <div className='container mx-auto'>
      <div>
        <span>
          <p className='text-tersierColor text-sm font-light capitalize'>
            Detail / {title}
          </p>
        </span>
        <div className='w-full grid grid-cols-1 xl:grid-cols-12 xl:grid-rows-1 gap-y-4 overflow-hidden px-0 py-8 xl:py-12'>
          <div className='overflow-hidden col-start-1 col-end-12 xl:col-start-1 xl:col-end-8 row-start-1 w-full h-[300px] md:h-[525px] xl:h-[500px]'>
            <Image
              className='w-full h-full object-cover object-center'
              src={slider}
              width={400}
              height={400}
              alt={title}
            />
          </div>
          <div className='thumbnail grid-flow-col grid gap-x-2 pl-2 row-start-2 -mx-2 xl:-mx-0 overflow-x-auto xl:row-start-1 xl:gap-y-2 xl:grid-flow-row xl:col-start-8 xl:col-end-13 items-center xl:items-start xl:overflow-hidden'>
            <div className='flex gap-x-2 xl:grid xl:grid-cols-3 xl:gap-2'>
              {imageUrls?.map((item, index) => {
                return (
                  <div
                    key={item.id + index}
                    onClick={() => setSlider(item.url)}>
                    <div
                      className={`bg-gray-100 w-[106px] h-[106px] md:w-[130px] md:h-[130px] xl:w-[164px] xl:h-[161px] cursor-pointer item transition-all  ${
                        slider === item.url ? 'selected' : ''
                      }`}>
                      <Image
                        width={300}
                        height={300}
                        src={item.url}
                        className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
                        alt={title}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='detail w-full col-start-1 col-end-12 xl:col-end-9 overflow-hidden ml-2 xl:ml-3 py-2'>
            <p className='font-medium text-secondaryColor text-xl xl:text-2xl capitalize mb-1'>
              {title}
            </p>
            <p className='text-tersierColor font-light text-sm mr-3'>
              {location}
            </p>
            <div className='w-full flex items-center justify-start flex-row flex-wrap gap-2 pt-4 pb-6'>
              {fasilitas.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='bg-[#EAEAEA] w-2/5 h-[110px] px-3 py-4 flex items-center justify-center flex-col xl:w-1/6'>
                    <div className='text-4xl text-secondaryColor'>
                      {item.icons}
                    </div>
                    <p className='text-secondaryColor font-normal text-sm text-center capitalize'>
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className='text-lg xl:text-xl font-medium text-secondaryColor capitalize py-3 xl:py-5'>
              amenities room
            </p>
            <div className='w-full flex items-center justify-start flex-row flex-wrap gap-3 gap-y-5'>
              {amenities.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-start gap-x-2 w-2/5'>
                    <div className='text-primaryColor text-4xl xl:text-5xl'>
                      {item.icons}
                    </div>
                    <p className='text-sm font-normal text-secondaryColor capitalize'>
                      {item.amenites}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-full col-start-1 col-end-12 overflow-hidden xl:col-start-9 xl:col-end-13'>
            <div className='flex flex-col bg-[#FEFEFF] border border-[#DEDCDA] shadow-sm p-4 xl:px-12 xl:py-10'>
              <p className='text-secondaryColor font-normal text-lg xl:text-xl capitalize'>
                Rp150,000 - 550,000
              </p>
              <hr className='w-full text-tersierColor my-2' />
              <div className='flex flex-row items-center gap-x-2 xl:gap-x-4 justify-start'>
                <div className='flex flex-col'>
                  <label
                    htmlFor='room'
                    className='text-base font-regular text-secondaryColor md:text-xl my-2'>
                    Tipe Kamar
                  </label>
                  <select
                    className='border-none shadow-lg p-4 rounded-md'
                    value={selectRoom}
                    onChange={handleChangeRoom}
                    name='room'
                    id='room'>
                    <option value='studio'>Studio</option>
                    <option value='2 bedroom'>2 Bedroom</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label
                    htmlFor='duration'
                    className='text-base font-regular text-secondaryColor md:text-xl my-2'>
                    Durasi Sewa
                  </label>
                  <select
                    className='border-none shadow-lg p-4 rounded-md'
                    value={selectDuration}
                    onChange={handleChangeDuration}
                    name='duration'
                    id='duration'>
                    <option value='{"duration" : "3", "studio" : "150,000", "2 bedroom" : "200,000"}'>
                      3 Jam
                    </option>
                    <option value='{"duration" : "6", "studio" : "200,000", "2 bedroom" : "300,000"}'>
                      6 Jam
                    </option>
                    <option value='{"duration" : "9", "studio" : "250,000", "2 bedroom" : "350,000"}'>
                      9 Jam
                    </option>
                    <option value='{"duration" : "12", "studio" : "300,000", "2 bedroom" : "400,000"}'>
                      12 Jam
                    </option>
                    <option value='{"duration" : "24", "studio" : "400,000", "2 bedroom" : "550,000"}'>
                      24 Jam
                    </option>
                  </select>
                </div>
              </div>
              <hr className='text-tersierColor my-6' />
              <div className='flex flex-col'>
                <p className='text-secondaryColor font-normal text-base xl:text-xl'>
                  Rp
                  {selectRoom === 'studio'
                    ? parseJSON
                      ? parseJSON.studio
                      : '150,000'
                    : parseJSON
                    ? parseJSON['2 bedroom']
                    : '200,000'}{' '}
                  / {parseJSON.duration} Jam
                </p>
                <p className='text-tersierColor font-light text-sm capitalize'>
                  Tipe {selectRoom}
                </p>
                <CustomButton
                  className='button text-white justify-center mt-4 mb-1'
                  type='link'
                  ariaLabel='Booking kamar sekarang'
                  isExternal
                  target='_blank'
                  href={`https://api.whatsapp.com/send?phone=6289689156131&text=Halo%20Minerva%20Saya%20mau%20booking%20kamar%20ya%20min%2C%20dapat%20info%20dari%20Website%20Minerva.%20*Unit%3A*%20${title}%20*Durasi%20Sewa:*%20${
                    parseJSON ? parseJSON.duration : '3'
                  }%20jam%20*Tipe%20Kamar%20%3A*%20${selectRoom}%20.Terimakasih%20ya%20min`}
                  isHover
                  isFlex
                  isFull
                  isRounded
                  isPrimary>
                  Booking Sekarang
                </CustomButton>
                <span className='text-sm font-light text-red-500'>
                  *Weekend + Rp50,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
