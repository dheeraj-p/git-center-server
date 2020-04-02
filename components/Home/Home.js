import Repositories from '../Repositories/Repositories';
import Header from '../Header/Header';
import CreateRepository from '../CreateRepository/CreateRepository';
import AddSSHKey from '../AddSSHKey/AddSSHKey';

export default function Home() {
  return (
    <div>
      <Header />
      <Repositories />
      <CreateRepository />
      <AddSSHKey />
    </div>
  );
}
