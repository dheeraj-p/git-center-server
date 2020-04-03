import CreateRepositoryStyles from './CreateRepository.style';

export default function CreateRepository() {
  return (
    <div className='create-repository'>
      <h2>Create Repository</h2>
      <p>Spaces are not allowed. Use '-' or '_' instead.</p>
      <div className="input-box">
        <input
          type='text'
          name='repoName'
          class='form-control'
          placeholder='Repository Name'
        />
        <button type='button' class='btn btn-primary'>
          Create
        </button>
      </div>
      <style jsx>{CreateRepositoryStyles}</style>
    </div>
  );
}
