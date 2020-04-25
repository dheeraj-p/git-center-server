import { useState } from 'react';
import Toast from '../Toast/Toast';
import RepositoryListItem from '../RepositoryListItem/RepositoryListItem';

export default function Repositories({ repositories }) {
  const [isToastVisible, setToastVisible] = useState(false);
  const onCopy = () => setToastVisible(true);
  const onCloseToast = () => setToastVisible(false);

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Repositories</h5>
        <ul className="list-group">
          {repositories.map(repo => (
            <RepositoryListItem {...repo} key={repo.name} onCopy={onCopy} />
          ))}
        </ul>
      </div>
      <Toast
        isVisible={isToastVisible}
        message="Copied to clipboard!"
        onClose={onCloseToast}
      />
    </div>
  );
}
