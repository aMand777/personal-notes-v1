import React from 'react'
import { PiLockKeyDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import AlertMessage from '../../../../components/alert/AlertMessage'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { POST_LOGIN } from '../../../../services/auth.services'
import { setStorage } from '../../../../utils/storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useLocale from '../../../../hooks/useLocale'

const FormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
})

type Inputs = {
  email: string
  password: string
}

const FormLogin = () => {
  const queryClient = useQueryClient()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const { isLocale } = useLocale()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutateAsync: authUser } = useMutation({
    mutationFn: POST_LOGIN,
    onSuccess: (data) => {
      setLoading(false)
      const accessToken = data.data.accessToken
      setStorage('accessToken', accessToken)
      queryClient.invalidateQueries({ queryKey: ['GET_USER_LOGGED_IN'] })
      queryClient.invalidateQueries({ queryKey: ['GET_NOTES'] })
    },
    onError: (error: string) => {
      setLoading(false)
      setErrorMessage(error)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    await authUser(data)
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
        <p className='text-2xl font-semibold'>{isLocale === 'id' ? 'Masuk' : 'Login'}</p>
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
            {errors.password ? (
              <AlertMessage message={errors.password?.message} />
            ) : (
              errorMessage?.toLowerCase().includes('password') && (
                <AlertMessage message={errorMessage} />
              )
            )}
          </label>
          <label className='label cursor-pointer'>
            <span className='label-text'>Show Password</span>
            <input
              onChange={handleCheckboxChange}
              type='checkbox'
              className='checkbox checkbox-accent'
            />
          </label>
          <button disabled={loading} type='submit' className='btn btn-primary w-full mt-5'>
            {loading && <span className='loading loading-spinner'></span>}
            {loading ? 'loading...' : isLocale === 'id' ? 'Masuk' : 'Login'}
          </button>
        </form>
        <div className='flex gap-1 mt-5'>
          <p>{isLocale === 'id' ? 'Belum punya akun?' : "Don't have an account?"}</p>
          <Link to='/auth/register' className='link link-info'>
            {isLocale === 'id' ? 'Daftar disini' : 'Register here'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormLogin