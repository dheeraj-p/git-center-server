export default function AddSSHKey() {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Add SSH Key</h5>
        <p className="card-text text-muted">Paste you public SSH key to access repositories.</p>
        <div className="row no-gutters">
          <div className="col-12 col-md-9 mb-2 mb-md-0">
            <textarea
              className="form-control"
              placeholder="Paste you public key here"
            />
          </div>
          <div className="col-12 col-md-3 align-self-end">
            <button type="button" className="btn btn-success w-100 ml-md-2">
              Add Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
