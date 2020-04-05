import { useState } from 'react';
import { useRouter } from 'next/router';
import * as APIClient from '../../api_client';

export default function CreateRepository() {
  const [repositoryName, setRepositoryName] = useState('');
  const router = useRouter();

  const onChangeRepoName = (e) => {
    setRepositoryName(e.target.value);
  };

  const onClickCreateButton = async () => {
    await APIClient.createRepository(repositoryName);
    router.push('/');
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Create Repository</h5>
        <p className="card-text text-muted">
          Spaces are not allowed. Use '-' or '_' instead.
        </p>
        <div className="row no-gutters">
          <div className="col-12 col-md-9 mb-2 mb-md-0">
            <input
              type="text"
              name="repoName"
              className="form-control"
              placeholder="Repository Name"
              value={repositoryName}
              onChange={onChangeRepoName}
            />
          </div>
          <div className="col-12 col-md-3">
            <button
              type="button"
              className="btn btn-success w-100 ml-md-2"
              onClick={onClickCreateButton}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
