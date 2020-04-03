import Repositories from '../Repositories/Repositories';
import Header from '../Header/Header';
import CreateRepository from '../CreateRepository/CreateRepository';
import AddSSHKey from '../AddSSHKey/AddSSHKey';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <div className="d-flex flex-column">
              <CreateRepository />
              <AddSSHKey />
            </div>
          </div>
          <div className="col-md">
            <Repositories />
          </div>
        </div>
      </div>
    </div>
  );
}
