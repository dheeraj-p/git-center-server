export default function CreateRepository() {
  return (
    <div>
      <h2>Create Repository</h2>
      <p>Spaces are not allowed. Use '-' or '_' instead.</p>
      <div>
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
    </div>
  );
}
