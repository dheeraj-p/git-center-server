import fetch from 'isomorphic-unfetch';
import PageLayout from '../components/PageLayout/PageLayout';
import CreateRepository from '../components/CreateRepository/CreateRepository';
import AddSSHKey from '../components/AddSSHKey/AddSSHKey';
import Repositories from '../components/Repositories/Repositories';

export default function Index({ repositories }) {
  return (
    <PageLayout title="GitCenter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <div className="d-flex flex-column">
              <CreateRepository />
              <AddSSHKey />
            </div>
          </div>
          <div className="col-md">
            <Repositories repositories={repositories} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(_ctx) {
  const response = await fetch(
    'http://localhost:3000/api/repositories'
  ).then((res) => res.json());

  const { repositories } = response.data;
  return { props: { repositories } };
}
