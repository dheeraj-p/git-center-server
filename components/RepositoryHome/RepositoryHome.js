import PageLayout from '../PageLayout/PageLayout';
import CreateRepository from '../CreateRepository/CreateRepository';
import AddSSHKey from '../AddSSHKey/AddSSHKey';
import Repositories from '../Repositories/Repositories';
import { useState, useEffect } from 'react';
import * as APIClient from '../../api_client';

const RepositoryHome = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const username = sessionStorage.getItem('username');
    const res = await APIClient.getUserRepositories(username);
    setRepositories(res.data);
  }, []);

  return (
    <PageLayout title='GitCenter'>
      <div className='container-md pb-3'>
        <div className='row'>
          <div className='col-lg align-self-center'>
            <CreateRepository />
          </div>
          <div className='col-lg'>
            <AddSSHKey />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Repositories repositories={repositories} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RepositoryHome;
