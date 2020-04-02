export default function AddSSHKey() {
  return (
    <div>
      <h2>Add SSH Keys</h2>
      <p>
        Please paste your public SSH Key. This is needed to get access to
        repositories.
      </p>
      <div>
        <input type='text' name='repoName' placeholder='Your public key here' />
        <button>Add Key</button>
      </div>
    </div>
  );
}
