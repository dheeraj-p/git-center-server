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
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12"><CreateRepository /></div>
              <div className="col-md-12"><AddSSHKey /></div>
            </div>
          </div>
          <div className="col-md-5">
            <Repositories />
          </div>
        </div>
      </div>
    </div>
  );
}
