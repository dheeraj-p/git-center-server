export default function AddSSHKey() {
  return (
    <div>
      <h2>Add SSH Keys</h2>
      <p>
        Please paste your public SSH Key. This is needed to get access to
        repositories.
      </p>
      <div>
        <input type='text' name='repoName' class="form-control" placeholder='Your public key here' />
        <button type='button' class='btn btn-primary'>
          Add Key
        </button>
      </div>
    </div>
  );
}
