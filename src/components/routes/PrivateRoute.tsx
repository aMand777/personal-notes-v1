import { Outlet, Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  isAuthenticated: boolean
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='auth/login' replace />}</>
}

export default PrivateRoute