import PageLayout from '../../components/PageLayout/PageLayout';
import RepositoryTree from '../../components/RepositoryTree/RepositoryTree';
import * as APIClient from '../../api_client';
import BlobView from '../../components/BlobView/BlobView';

const CONTENT_LOADERS = {
  tree: RepositoryTree,
  blob: BlobView,
};

export default function RepositoryContent({ object, type, error }) {
  const ConterLoader = CONTENT_LOADERS[type];
  const repoName = error ? 'Error' : object.repository;
  return (
    <PageLayout title={repoName}>
      <div className='container-md pb-3'>
        <div className='card mt-2'>
          <div className='card-body'>
            <h4 className='card-title mb-3'>{repoName}</h4>
            {!error ? (
              <ConterLoader {...object} />
            ) : (
              <h6>Sorry! Can't find what you are looking for!</h6>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  // const [repositoryName, type = 'tree', ...restPath] = params.path;

  // const baseURL = `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;
  // let { error, message, data } = await APIClient.getGitObject(
  //   repositoryName,
  //   type,
  //   restPath,
  //   baseURL
  // );
  // console.log(message);
  // if (!error) {
  //   return {
  //     props: {
  //       type: data.type,
  //       object: { ...data } // name, branch, path, content
  //     }
  //   };
  // }

  // return { props: { error: { message } } };
  return {
    props: {
      type: 'blob',
      object: {
        name: '',
        path: '/somePath.js',
        content: 'Some new content\nlol',
        repository: 'First Repo',
      },
    },
  };
}
