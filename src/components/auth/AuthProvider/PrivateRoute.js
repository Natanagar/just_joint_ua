import React, { useContext } from 'react'
import { Router, Link, Redirect, Location } from '@reach/router'
import { FirebaseContext } from './AuthProvider'

const PrivateRouter = ({ component: RouteComponent, ...restProps }) => {
  const { currentUser } = useContext(FirebaseContext)
  return (
    <Router
      {...restProps}
      render={(routeProps) => (currentUser ? <RouteComponent {...routeProps} /> : <Redirect to='/login' />)}
    />
  )
}
export default PrivateRouter
