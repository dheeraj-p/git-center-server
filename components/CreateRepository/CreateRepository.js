export default function CreateRepository() {
  return (
    <div>
      <h2>Create Repository</h2>
      <p>Spaces are not allowed. Use '-' or '_' instead.</p>
      <div>
        <input type='text' name='repoName' placeholder='Repository Name' />
        <button>Create</button>
      </div>
    </div>
  );
}
