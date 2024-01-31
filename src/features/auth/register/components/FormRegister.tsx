import React from 'react'
import { PiLockKeyDuotone } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import AlertMessage from '../../../../components/alert/AlertMessage'
import { LocaleContext } from '../../../../context/LocaleContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { POST_REGISTER_USER } from '../../../../services/register.services'
import { openAlert } from '../../../../utils/handleModal'

const FormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string().min(1, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormRegister = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const { isLocale } = React.useContext(LocaleContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const { mutateAsync: registerUser } = useMutation({
    mutationFn: POST_REGISTER_USER,
    onSuccess: () => {
      openAlert('alert-confirm')
      navigate('/auth/login')
    },
    onError: (error: string) => {
      setErrorMessage(error)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
    await registerUser(user)
  }

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='w-full flex justify-center items-center mt-10'>
      <div className='flex flex-col justify-center items-center container'>
        <div className='bg-secondary rounded-full p-1 text-secondary-content mb-2'>
          <PiLockKeyDuotone size={30} />
        </div>
        <p className='text-2xl font-semibold'>Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 md:max-w-md' noValidate>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text'>Name</span>
            </div>
            <input
              type='name'
              placeholder='example@mail.com'
              className={`${errors.name ? 'input-error' : ''} input input-bordered w-full`}
              {...register('name')}
            />
            {errors.name && <AlertMessage message={errors.name.message} />}
          </label>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input
              type='email'
              placeholder='example@mail.com'
              className={`${errors.email ? 'input-error' : ''} input input-bordered w-full`}
              {...register('email')}
            />
            {errors.email ? (
              <AlertMessage message={errors.email?.message} />
            ) : (
              errorMessage?.toLowerCase().includes('email') && (
                <AlertMessage message={errorMessage} />
              )
            )}
          </label>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text'>Password</span>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password*'
              className={`${errors.password ? 'input-error' : ''} input input-bordered w-full`}
              {...register('password')}
            />
            {errors.password && <AlertMessage message={errors.password.message} />}
          </label>
          <label className='form-control w-full'>
            <div className='label'>
              <span className='label-text'>Confirm Password</span>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm Password*'
              className={`${
                errors.confirmPassword ? 'input-error' : ''
              } input input-bordered w-full`}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <AlertMessage message={errors.confirmPassword.message} />}
          </label>
          <label className='label cursor-pointer'>
            <span className='label-text'>Show Password</span>
            <input
              onChange={handleCheckboxChange}
              type='checkbox'
              className='checkbox checkbox-accent'
            />
          </label>
          <button type='submit' className='btn btn-primary w-full mt-5'>
            Login
          </button>
        </form>
        <div className='flex gap-1 mt-5'>
          <p>{isLocale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'}</p>
          <Link to='/auth/login' className='link link-info'>
            {isLocale === 'id' ? 'Masuk disini' : 'Sign in here'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormRegister
