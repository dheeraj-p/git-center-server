import { CopyToClipboard } from 'react-copy-to-clipboard';
import { isClientSide } from '../../utils';
import { useState } from 'react';

export default function RepositoryListItem({ name }) {
  const [buttonText, setButtonText] = useState('Clone');

  const host = isClientSide()
    ? window.location.hostname
    : process.env.SERVER_HOST;
  const repoPath = `git@${host}:repos/${name}.git`;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <CopyToClipboard text={repoPath} onCopy={() => setButtonText('Copied!')}>
        <button
          className="btn btn-outline-success btn-sm"
          onMouseOut={() => setButtonText('Clone')}
        >
          {buttonText}
        </button>
      </CopyToClipboard>
    </li>
  );
}
