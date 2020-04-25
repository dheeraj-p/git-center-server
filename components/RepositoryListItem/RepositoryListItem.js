import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import { isClientSide } from '../../utils';

export default function RepositoryListItem({ name, onCopy }) {
  const host = isClientSide()
    ? window.location.hostname
    : process.env.SERVER_HOST;
  const repoPath = `git@${host}:repos/${name}.git`;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link href="/repository/[...path]" as={`/repository/${name}`}>
        <a>{name}</a>
      </Link>
      <CopyToClipboard text={repoPath} onCopy={onCopy}>
        <button className="btn btn-outline-success btn-sm">Clone</button>
      </CopyToClipboard>
    </li>
  );
}
