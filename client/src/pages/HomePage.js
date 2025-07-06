import React from 'react'
import Layout from './../components/Layout/Layout';
import { AuthProvider } from '../context/auth';
import { useAuth } from '../context/auth';

function HomePage() {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={'Ecommerce-App - Home'}>
      <h1>Home Page</h1>
    </Layout>
  )
}

export default HomePage
