import RepositoriesStyles from './Repositories.style';

export default function Repositories({}) {
  return (
    <div className="card mt-2 repos-container">
      <div className="card-body">
        <h5 className="card-title">Repositories</h5>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
        </ul>
      </div>
      <style jsx>{RepositoriesStyles}</style>
    </div>
  );
}
