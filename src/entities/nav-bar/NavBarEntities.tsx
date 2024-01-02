import Link from 'next/link'

export const NavBarEntities = () => {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <p className='text-white text-lg font-semibold'>Your Logo</p>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Link href='/' className='text-gray-300 hover:text-white'>
              Home
            </Link>
            <Link href='/courses' className='text-gray-300 hover:text-white'>
              Courses
            </Link>
            <Link href='/about' className='text-gray-300 hover:text-white'>
              About
            </Link>
            <Link href='/services' className='text-gray-300 hover:text-white'>
              Services
            </Link>
            <Link href='/contact' className='text-gray-300 hover:text-white'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
