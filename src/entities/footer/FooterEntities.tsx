import Link from 'next/link'

export const FooterEntities = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
      <div className='mb-4 md:mb-0'>
        <p className='text-lg font-semibold'>Company Name</p>
        <p className='text-sm'>123 Main Street, City, Country</p>
      </div>
      <div className='flex space-x-4'>
        <Link href='/courses' className='hover:text-white'>
          Courses
        </Link>
        <Link href='/about' className='hover:text-white'>
          About
        </Link>
        <Link href='/services' className='hover:text-white'>
          Services
        </Link>
        <Link href='/contact' className='hover:text-white'>
          Contact
        </Link>
      </div>
    </div>
  )
}
