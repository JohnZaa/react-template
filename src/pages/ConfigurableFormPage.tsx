import { useForm, Controller } from 'react-hook-form'
import type { RegisterOptions } from 'react-hook-form'

type FieldType = 'text' | 'number' | 'email' | 'select' | 'checkbox'

interface FieldConfig {
  name: string
  label: string
  type: FieldType
  options?: { label: string; value: string | number }[]
  rules?: RegisterOptions
}

const formConfig: FieldConfig[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    rules: { required: 'Username is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    rules: {
      required: 'Email is required',
      pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
    },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    rules: {
      required: 'Age is required',
      min: { value: 18, message: 'Must be at least 18' },
    },
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
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

const ConfigurableFormPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Configurable Complex Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        {formConfig.map((field) => {
          // Cast field.name to keyof FormData for type safety
          const fieldName = field.name as keyof FormData

          //   // Fix rules typing for deps property
          //   const rules =
          //     field.rules && field.rules.deps
          //       ? {
          //           ...field.rules,
          //           deps: Array.isArray(field.rules.deps)
          //             ? (field.rules.deps as (keyof FormData)[])
          //             : (field.rules.deps as keyof FormData),
          //         }
          //       : field.rules

          // Helper to get error for the field
          const error = errors[fieldName]

          return (
            <div key={field.name} style={fieldWrapperStyle}>
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
                    'setValueAs' | 'valueAsNumber' | 'valueAsDate' | 'disabled'
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
                          style={inputStyle}
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
                          style={inputStyle}
                        />
                      )
                    case 'select':
                      return (
                        <select
                          {...controllerField}
                          id={field.name}
                          value={String(controllerField.value ?? '')}
                          style={inputStyle}
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
                            style={{ marginRight: 6 }}
                          />
                          {field.label}
                        </label>
                      )
                    default:
                      return <></>
                  }
                }}
              />
              {error && <p style={errorStyle}>{error.message as string}</p>}
            </div>
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
    </div>
  )
}

export default ConfigurableFormPage
