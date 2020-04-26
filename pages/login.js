import PageLayout from '../components/PageLayout/PageLayout';
import LoginPageStyles from '../styles/login.style';

export default function Login() {
  return (
    <PageLayout title='GitCenter'>
      <div className='container-md pb-3 page-container'>
        <div className='row h-100 justify-content-center'>
          <div className='col-md-6 align-self-center'>
            <div className='card pb-4 pt-4'>
              <div className='card-body'>
                <h4 className='card-title'>Login</h4>
                <form className='d-flex flex-column align-content-center'>
                  <input
                    type='text'
                    className='form-control mb-2'
                    placeholder='username'
                  />
                  <input
                    type='password'
                    className='form-control mb-2'
                    placeholder='password'
                  />
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
