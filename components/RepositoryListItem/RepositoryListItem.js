import { CopyToClipboard } from 'react-copy-to-clipboard';
import { isClientSide } from '../../utils';

export default function RepositoryListItem({ name }) {
  const host = isClientSide()
    ? window.location.hostname
    : process.env.SERVER_HOST;
  const repoPath = `git@${host}:repos/${name}.git`;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <CopyToClipboard text={repoPath}>
        <button className="btn btn-outline-success btn-sm">Clone</button>
      </CopyToClipboard>
    </li>
  );
}
