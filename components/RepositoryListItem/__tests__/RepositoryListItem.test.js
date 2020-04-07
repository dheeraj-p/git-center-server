import { shallow } from 'enzyme';
import RepositoryListItem from '../RepositoryListItem';

describe('RepositoryListItem', () => {
  it('should render properly on client side', () => {
    global.process.browser = true;
    global.window = { location: { hostname: 'host-from-browser' } };

    const wrapper = shallow(<RepositoryListItem name="test" />);
    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.find('CopyToClipboard').prop('text')).toEqual(
      'git@host-from-browser:repos/test.git'
    );
  });

  it('should render properly on server side', () => {
    global.process.browser = false;
    const wrapper = shallow(<RepositoryListItem name="test" />);
    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.find('CopyToClipboard').prop('text')).toEqual(
      'git@host-from-server:repos/test.git'
    );
  });
});
