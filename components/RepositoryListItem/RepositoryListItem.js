export default function RepositoryListItem({ name }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <button className="btn btn-outline-success btn-sm">Clone</button>
    </li>
  );
}
