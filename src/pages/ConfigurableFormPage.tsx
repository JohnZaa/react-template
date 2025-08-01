import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useForm, Controller } from 'react-hook-form'
import type { RegisterOptions } from 'react-hook-form'
import React, { useState } from 'react'
import type { DragEndEvent } from '@dnd-kit/core'

type FieldType = 'text' | 'number' | 'email' | 'select' | 'checkbox'

interface FieldConfig {
  name: string
  label: string
  type: FieldType
  width?: number // New property for width
  options?: { label: string; value: string | number }[]
  rules?: RegisterOptions
}

const formConfig: FieldConfig[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    width: 200, // New property for width
    rules: { required: 'Username is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    width: 200, // New property for width
    rules: {
      required: 'Email is required',
      pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
    },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    width: 200, // New property for width
    rules: {
      required: 'Age is required',
      min: { value: 18, message: 'Must be at least 18' },
    },
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    width: 200, // New property for width
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
    rules: { required: 'Gender is required' },
  },
  {
    name: 'accept',
    label: 'Accept Terms',
    type: 'checkbox',
    width: 200, // New property for width
    rules: { required: 'You must accept the terms' },
  },
]

type FormData = {
  username: string
  email: string
  age: number
  gender: string
  accept: boolean
}

const fieldWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginBottom: 12,
}

const labelStyle: React.CSSProperties = {
  fontWeight: 500,
  marginBottom: 4,
}

const errorStyle: React.CSSProperties = {
  color: 'red',
  margin: 0,
  fontSize: 13,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '7px 10px',
  border: '1px solid #ccc',
  borderRadius: 4,
  fontSize: 15,
  boxSizing: 'border-box',
}

const DraggableField = ({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        background: isDragging ? '#f0f4fa' : undefined,
      }}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  )
}

const ConfigurableFormPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()
  const [fields, setFields] = useState(formConfig)
  const [panelWidth, setPanelWidth] = useState(480)
  const minPanelWidth = 800 // Adjusted to a larger value for better usability
  const maxPanelWidth = 1000
  const sensors = useSensors(useSensor(PointerSensor))

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.name === active.id)
      const newIndex = fields.findIndex((f) => f.name === over.id)
      setFields(arrayMove(fields, oldIndex, newIndex))
    }
  }

  const panelStyle: React.CSSProperties = {
    width: panelWidth,
    minWidth: minPanelWidth,
    maxWidth: maxPanelWidth,
    margin: '0 auto',
    padding: 24,
    position: 'relative',
  }

  const handlePanelResize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const startX = e.clientX
    const startWidth = panelWidth
    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.min(
        Math.max(startWidth + moveEvent.clientX - startX, minPanelWidth),
        maxPanelWidth
      )
      setPanelWidth(newWidth)
    }
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div style={panelStyle}>
      <h2 style={{ marginBottom: 24 }}>Configurable Complex Form</h2>
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: 8,
          height: '100%',
          cursor: 'ew-resize',
          zIndex: 10,
        }}
        onMouseDown={handlePanelResize}
        title="Drag to resize panel"
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={fields.map((f) => f.name)}
          strategy={verticalListSortingStrategy}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            {fields.map((field) => {
              const fieldName = field.name as keyof FormData
              const error = errors[fieldName]
              return (
                <DraggableField key={field.name} id={field.name}>
                  <div style={fieldWrapperStyle}>
                    {field.type !== 'checkbox' && (
                      <label htmlFor={field.name} style={labelStyle}>
                        {field.label}
                      </label>
                    )}
                    <Controller
                      name={fieldName}
                      control={control}
                      rules={
                        field.rules as Omit<
                          RegisterOptions<FormData, keyof FormData>,
                          | 'setValueAs'
                          | 'valueAsNumber'
                          | 'valueAsDate'
                          | 'disabled'
                        >
                      }
                      render={({ field: controllerField }) => {
                        switch (field.type) {
                          case 'text':
                          case 'email':
                            return (
                              <input
                                {...controllerField}
                                id={field.name}
                                type={field.type}
                                value={
                                  typeof controllerField.value === 'string' ||
                                  typeof controllerField.value === 'number'
                                    ? controllerField.value
                                    : ''
                                }
                                style={{
                                  ...inputStyle,
                                  width: field.width || '100%',
                                }}
                              />
                            )
                          case 'number':
                            return (
                              <input
                                {...controllerField}
                                id={field.name}
                                type="number"
                                value={String(controllerField.value ?? '')}
                                onChange={(e) =>
                                  controllerField.onChange(
                                    e.target.value === ''
                                      ? undefined
                                      : Number(e.target.value)
                                  )
                                }
                                style={{
                                  ...inputStyle,
                                  width: field.width || '100%',
                                }}
                              />
                            )
                          case 'select':
                            return (
                              <select
                                {...controllerField}
                                id={field.name}
                                value={String(controllerField.value ?? '')}
                                style={{
                                  ...inputStyle,
                                  width: field.width || '100%',
                                }}
                              >
                                <option value="">Select...</option>
                                {field.options?.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                            )
                          case 'checkbox':
                            return (
                              <label
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 8,
                                }}
                              >
                                <input
                                  {...controllerField}
                                  id={field.name}
                                  type="checkbox"
                                  checked={!!controllerField.value}
                                  value={undefined}
                                  onChange={(e) =>
                                    controllerField.onChange(e.target.checked)
                                  }
                                  style={{
                                    marginRight: 6,
                                    height: 16,
                                  }}
                                />
                                {field.label}
                              </label>
                            )
                          default:
                            return <></>
                        }
                      }}
                    />
                    {error && (
                      <p style={errorStyle}>{error.message as string}</p>
                    )}
                  </div>
                </DraggableField>
              )
            })}
            <button
              type="submit"
              style={{
                padding: '10px 0',
                background: '#1677ff',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                marginTop: 8,
              }}
            >
              Submit
            </button>
          </form>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default ConfigurableFormPage
