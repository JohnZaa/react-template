import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { ResizableField } from '../components/ResizableField'
import type { FieldConfig } from '../types/FieldConfig'
import type { DragEndEvent } from '@dnd-kit/core'
export default function ResizableForm() {
  const [fields, setFields] = useState<FieldConfig[]>([
    { id: '1', name: 'email', label: 'Email', type: 'text', width: 200 },
    { id: '2', name: 'age', label: 'Age', type: 'number', width: 150 },
    { id: '3', name: 'city', label: 'City', type: 'text', width: 180 },
  ])

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id)
      const newIndex = fields.findIndex((f) => f.id === over.id)
      setFields((items) => arrayMove(items, oldIndex, newIndex))
    }
  }

  const handleResize = (id: string, newWidth: number) => {
    setFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, width: newWidth } : f))
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={fields.map((f) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          {fields.map((field) => (
            <ResizableField
              key={field.id}
              field={field}
              onResize={handleResize}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
