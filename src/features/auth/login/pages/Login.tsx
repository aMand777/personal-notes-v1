import React from 'react'
import NavAuth from '../../../../components/navigation/NavAuth'
import FormLogin from '../components/FormLogin'
import useAuth from '../../../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { POST_LOGIN } from '../../../../services/auth.services.ts'
import { setStorage } from '../../../../utils/storage.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

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

const Login = () => {
  const queryClient = useQueryClient()
  const { isAuthenticated } = useAuth()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [errorResponse, setErrorResponse] = React.useState<string>('')

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
      queryClient.invalidateQueries()
    },
    onError: (error: string) => {
      setLoading(false)
      setErrorResponse(error)
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    await authUser(data)
  }

  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }

  return (
    <>
      <NavAuth />
      <FormLogin
        loading={loading}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        errorResponse={errorResponse}
      />
    </>
  )
}

export default Login
