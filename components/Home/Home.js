import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Login from '../../pages/login';
import * as APIClient from '../../api_client';

const Home = () => {
  const router = useRouter();

  useEffect(async () => {
    const username = sessionStorage.getItem('username');
    const token = sessionStorage.getItem('token');
    const response = await APIClient.validateSession(username, token);

    if (response.data.isValidSession) router.push('/repositories');
  }, []);

  return <Login />;
};

export default Home;
