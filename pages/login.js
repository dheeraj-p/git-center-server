import PageLayout from '../components/PageLayout/PageLayout';
import LoginPageStyles from '../styles/login.style';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as APIClient from '../api_client';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <PageLayout title='GitCenter'>
      <div className='container-md pb-3 page-container'>
        <div className='row h-100 justify-content-center'>
          <div className='col-md-6 align-self-center'>
            <div className='card pb-4 pt-4'>
              <div className='card-body'>
                <h4 className='card-title'>Login</h4>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await APIClient.login(username, password);
                    if (res.error) {
                      return setError(res.message);
                    }
                    router.push('/');
                  }}
                  className='d-flex flex-column align-content-center'
                >
                  <input
                    type='text'
                    className='form-control mb-2'
                    placeholder='username'
                    onChange={(e) => {
                      setError('');
                      setUsername(e.target.value);
                    }}
                  />
                  <input
                    type='password'
                    className='form-control mb-2'
                    placeholder='password'
                    onChange={(e) => {
                      setError('');
                      setPassword(e.target.value);
                    }}
                  />
                  <label style={{ color: 'red' }}>{error}</label>
                  <input
                    type='submit'
                    className='btn btn-success'
                    value='Login'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{LoginPageStyles}</style>
    </PageLayout>
  );
}
