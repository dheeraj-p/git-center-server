import RepositoriesStyles from './Repositories.style';
import RepositoryListItem from '../RepositoryListItem/RepositoryListItem';

export default function Repositories({repositories}) {
  return (
    <div className="card mt-2 repos-container">
      <div className="card-body">
        <h5 className="card-title">Repositories</h5>
        <ul className="list-group">
          {repositories.map(repo => (
            <RepositoryListItem {...repo} key={repo.name} />
          ))}
        </ul>
      </div>
      <style jsx>{RepositoriesStyles}</style>
    </div>
  );
}
