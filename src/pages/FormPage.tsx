// src/pages/FormPage.tsx
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  age: number
}

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <div>
      <h2>Form Handling with React Hook Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '400px',
        }}
      >
        <div>
          <label>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            style={{ width: '100%', padding: '5px' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            style={{ width: '100%', padding: '5px' }}
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 18, message: 'You must be at least 18' },
            })}
            style={{ width: '100%', padding: '5px' }}
          />
          {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        </div>

        <button type="submit" style={{ padding: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormPage
