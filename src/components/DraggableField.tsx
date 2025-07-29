import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { FieldConfig } from '../types/FieldConfig'
export function DraggableField({ field }: { field: FieldConfig }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: '1px solid #ccc',
    padding: '10px',
    background: 'white',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'grab',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <label>{field.label}</label>
      <input type={field.type} name={field.name} />
    </div>
  )
}
