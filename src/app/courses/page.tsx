import { CreateCourseForm } from '@/features/courses-list/pub/create-course-form'
import { CoursesList } from '@/features/courses-list/pub/courses-list'

export default function CoursesPage() {
  return (
    <main>
      <CreateCourseForm revalidatePagePath='/' className='w-[300px] mb-10' />
      <CoursesList revalidatePagePath='/' />
    </main>
  )
}
