import React from 'react';
import CardTestimonial from '../Card/CardTestimonial';

export default function Testimonial() {
  const testimonialData = [
    {
      name: 'Faisal Safari',
      review:
        "Wah, Minerva's bener-bener joss deh! Pelayanannya mantap banget, cepat tanggap, dan selalu siap membantu nyariin apartemen yang pas buat aku. Apartemennya juga kece abis, kondisinya super bagus deh. Makasih banyak, Minerva's'",
      job: 'karyawan swasta',
    },
    {
      name: 'Fajri',
      review:
        "Seru banget sewa apartemen lewat Minerva's. Pilihan apartemennya banyak, semuanya mewah dan nyaman. Aku merasa aman dan nyaman banget pas tinggal di apartemen yang mereka kasih. Customer servicenya juga oke banget. Recomended banget, guys!'",
      job: 'PNS',
    },
    {
      name: 'Nur aini',
      review:
        "Makasih ya, Minerva's, udah bantu aku dapetin apartemen impian. Mereka kerjanya profesional abis, ramah banget, dan selalu ngebantu setiap langkahnya. Puas banget deh sama kualitas apartemen yang aku sewa, gak sabar buat tinggal di sana. Thank you, Minerva's!",
      job: 'freelancer',
    },
  ];
  return (
    <section className='w-full overflow-hidden py-12 md:py-24'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-x-2 '>
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
          <h2 className='font-normal text-primaryColor text-base sm:text-lg'>
            Testimonial Pelanggan Kami
          </h2>
        </div>
        <h3 className='text-secondaryColor font-semibold text-3xl py-2'>
          Apa yang dikatakan orang?
        </h3>
        <div className='grid grid-cols-1 items-center justify-center w-full sm:grid-cols-2 xl:grid-cols-3 py-4 md:py-6 gap-4'>
          {testimonialData.map((item, index) => {
            return (
              <CardTestimonial
                key={index}
                name={item.name}
                review={item.review}
                job={item.job}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
