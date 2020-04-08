import Link from 'next/link';

export default function RepositoryTree({
  repository,
  name,
  path,
  branch,
  content
}) {
  return (
    <div className="list-group mt-3">
      {content.map(({ path, type, name }) => {
        return (
          <Link
            href={`/repository/[...path]`}
            as={`/repository/${repository}/${type}/${branch}/${path}`}
          >
            <a className="list-group-item list-group-item-action">
              <img
                src={`/images/${type}.png`}
                className="mr-2"
                width="18"
                height="18"
              />
              <span className="text-muted">{name}</span>
            </a>
          </Link>
        );
      })}
    </div>
  );
}