'use client'

import { Button } from '@/shared/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { useTransition } from 'react'

export const CourseItem = ({ course, onDelete }: { course: CorseListElement; onDelete: () => Promise<void> }) => {
  const [isLoadingDelete, startDeleteTransition] = useTransition()
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  )
}
