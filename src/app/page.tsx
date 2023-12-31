import { CoursesList } from '@/features/courses-list/pub/courses-list'
import { CreateCourseForm } from '@/features/courses-list/pub/create-course-form'

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col p-8'>
      <CreateCourseForm revalidatePagePath='/' className='w-[300px] mb-10' />
      <CoursesList revalidatePagePath='/' />
    </main>
  )
}
