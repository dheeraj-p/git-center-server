import Link from 'next/link';
import FinderIcon from '../FinderIcon/FinderIcon';

export default function RepositoryTreeItems({ repository, branch, content }) {
  return content.map(({ path, type, name }) => {
    return (
      <Link
        href={`/repository/[...path]`}
        as={`/repository/${repository}/${type}/${branch}/${path}`}
      >
        <a className='list-group-item list-group-item-action'>
          <FinderIcon type={type} />
          <span className='text-muted'>{name}</span>
        </a>
      </Link>
    );
  });
}
