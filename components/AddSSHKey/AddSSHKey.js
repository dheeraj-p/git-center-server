export default function AddSSHKey() {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Add SSH Key</h5>
        <p className="card-text text-muted">Paste you public SSH key to access repositories.</p>
        <div className="row">
          <div className="col-md-9 col-sm-12 mb-2 mb-md-0">
            <textarea
              className="form-control"
              placeholder="Paste you public key here"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            <button type="button" className="btn btn-primary w-100">
              Add Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
