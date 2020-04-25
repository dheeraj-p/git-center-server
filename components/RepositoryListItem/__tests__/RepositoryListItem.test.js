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
      `git@${process.env.SERVER_HOST}:repos/test.git`
    );
  });

  it('should call onCopy when url is copied', () => {
    const onCopy = jest.fn();
    const wrapper = shallow(<RepositoryListItem name="test" onCopy={onCopy} />);
    wrapper.find('CopyToClipboard').props().onCopy();

    expect(onCopy).toBeCalled();
  });
});
