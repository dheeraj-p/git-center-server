import fetch from 'isomorphic-unfetch';
import PageLayout from '../components/PageLayout/PageLayout';
import CreateRepository from '../components/CreateRepository/CreateRepository';
import AddSSHKey from '../components/AddSSHKey/AddSSHKey';
import Repositories from '../components/Repositories/Repositories';

export default function Index({ repositories }) {
  return (
    <PageLayout title="GitCenter">
      <div className="container-md pb-3">
        <div className="row">
          <div className="col-lg align-self-center">
            <CreateRepository />
          </div>
          <div className="col-lg">
            <AddSSHKey />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
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
  return { props: { repositories: repositories.reverse() } };
}
