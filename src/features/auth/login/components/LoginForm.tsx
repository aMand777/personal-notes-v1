import React from 'react'
import { PiLockKeyDuotone } from 'react-icons/pi'
// import { Link } from 'react-router-dom'
import AlertMessage from '../../../../components/alert/AlertMessage'
import { LocaleContext } from '../../../../context/LocaleContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
})

type Inputs = {
  email: string,
  password: string,
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const { isLocale } = React.useContext(LocaleContext)
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
  defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data===>', data)

  // console.log('email===>', watch('email'))
  // console.log('password===>', watch('password'))
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
              <span className='label-text'>Email</span>
            </div>
            <input
              type='email'
              placeholder='example@mail.com'
              className={`${errors.email ? 'input-error' : ''} input input-bordered w-full`}
              {...register('email')}
            />
            {errors.email && <AlertMessage message={errors.email.message} />}
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
          <p>{isLocale === 'id' ? 'Belum punya akun?' : "Don't have an account?"}</p>
          {/* <Link to='/auth/signup' className='link link-info'>
            {isLocale === 'id' ? 'Daftar disini' : 'Register here'}
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default LoginForm
