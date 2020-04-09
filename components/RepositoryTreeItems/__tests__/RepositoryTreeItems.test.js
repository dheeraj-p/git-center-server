import { shallow } from 'enzyme';
import RepositoryTreeItems from '../RepositoryTreeItems';

describe('RepositoryTreeItems', () => {
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
      <RepositoryTreeItems
        content={content}
        repository='testRepo'
        branch='master'
      />
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
