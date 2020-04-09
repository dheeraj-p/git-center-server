import { shallow } from 'enzyme';
import RepositoryTree from '../RepositoryTree';

describe('RepositoryTree', () => {
  let content;
  beforeEach(() => {
    content = [
      {
        type: 'blob',
        name: 'testBlob',
        path: 'src/blob.js',
      },
      {
        type: 'tree',
        name: 'src',
        path: '/src',
      },
    ];
  });

  it('should render properly', () => {
    const wrapper = shallow(
      <RepositoryTree
        content={content}
        repository='testRepo'
        branch='master'
        path='test/path'
      />
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
