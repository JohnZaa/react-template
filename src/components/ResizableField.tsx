import { ResizableBox } from 'react-resizable'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import 'react-resizable/css/styles.css'
import type { FieldConfig } from '../types/FieldConfig'
export function ResizableField({
  field,
  onResize,
}: {
  field: FieldConfig
  onResize: (id: string, width: number) => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ResizableBox
        width={field.width || 200}
        height={80}
        axis="x"
        resizeHandles={['e']}
        onResizeStop={(e, data) => onResize(field.id, data.size.width)}
        minConstraints={[100, 80]}
        maxConstraints={[500, 80]}
      >
        <div
          style={{
            height: '100%',
            border: '1px solid #ccc',
            padding: 10,
            boxSizing: 'border-box',
            background: '#fff',
          }}
        >
          <label>{field.label}</label>
          <input
            type={field.type}
            style={{
              width: '100%',
            }}
          />
        </div>
      </ResizableBox>
    </div>
  )
}
