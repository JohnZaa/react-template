interface FieldConfig {
  id: string
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  width?: number
  height?: number
}
export type { FieldConfig }
