import RepositoriesStyles from './Repositories.style';

export default function Repositories({}) {
  return (
    <ol className='repo-container'>
      {[{ name: 'some' }].map(r => {
        return (
          <li className='repo'>
            <span> {r.name}</span>
            <button type='button' class='btn btn-primary'>
              clone
            </button>
          </li>
        );
      })}
      <style jsx>{RepositoriesStyles}</style>
    </ol>
  );
}
