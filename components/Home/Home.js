import Repositories from '../Repositories/Repositories';
import Header from '../Header/Header';
import CreateRepository from '../CreateRepository/CreateRepository';
import AddSSHKey from '../AddSSHKey/AddSSHKey';
import HomeStyles from './Home.style';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className='add-fields'>
          <CreateRepository />
          <AddSSHKey />
        </div>
        <Repositories />
      </div>
      <style jsx>{HomeStyles}</style>
    </div>
  );
}
