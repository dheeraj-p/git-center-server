import { Fragment } from 'react';

export default function BlobView({ repository, name, path, branch, content }) {
  return (
    <Fragment>
      <p className='text-muted'>{path}</p>
      <div>{content}</div>
    </Fragment>
  );
}
