import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import type { FieldConfig } from '../types/FieldConfig'
import { useState } from 'react'
import { DraggableField } from '../components/DraggableField'
import type { DragEndEvent } from '@dnd-kit/core'

export default function DraggableGridForm() {
  const [fields, setFields] = useState<FieldConfig[]>([
    { id: '1', name: 'email', label: 'Email', type: 'text' },
    { id: '2', name: 'age', label: 'Age', type: 'number' },
    { id: '3', name: 'city', label: 'City', type: 'text' },
    { id: '4', name: 'country', label: 'Country', type: 'text' },
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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={fields.map((f) => f.id)}
        strategy={verticalListSortingStrategy} // 可改为 gridStrategy
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {fields.map((field) => (
            <DraggableField key={field.id} field={field} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
