import CustomButton from '@/components/Button';
import Image from 'next/image';

export default function notFound() {
  return (
    <section className='w-full overflow-hidden px-4 pb-6 pt-28 md:pt-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='w-[450px] h-[450px]'>
            <Image
              src='/images/notfound.jpg'
              width={400}
              height={400}
              alt='NotFound Minerva'
              className='object-cover object-center w-full h-full'
            />
          </div>
          <div className='py-4 text-center'>
            <h2 className='font-semibold text-3xl xl:text-4xl text-secondaryColor'>
              Ooops....
            </h2>
            <h2 className='font-semibold text-3xl xl:text-4xl text-secondaryColor'>
              Halaman yang kamu inginkan tidak ada...
            </h2>
          </div>
          <CustomButton
            type='link'
            href='/'
            isPrimary
            isHover
            isRounded
            className='button text-white'>
            Yuk Pulang Yuk
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
