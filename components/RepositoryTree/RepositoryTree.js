import { Fragment } from 'react';
import RepositoryTreeItems from '../RepositoryTreeItems/RepositoryTreeItems';

export default function RepositoryTree({
  repository,
  name,
  path,
  branch,
  content,
}) {
  return (
    <Fragment>
      <p className='text-muted'>{path}</p>
      <div className='list-group mt-3'>
        <RepositoryTreeItems
          repository={repository}
          branch={branch}
          content={content}
        />
      </div>
    </Fragment>
  );
}
