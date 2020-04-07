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

  it('shoyld change button\'s text to "Copied!" when url is copied', ()=> {
    const wrapper = shallow(<RepositoryListItem name="test" />);
    wrapper.find('CopyToClipboard').props().onCopy();

    expect(wrapper.find("button").text()).toBe("Copied!");
  });

  it('shoyld change button\'s text to "Clone" when mouse is taken off', ()=> {
    const wrapper = shallow(<RepositoryListItem name="test" />);
    wrapper.find('button').props().onMouseOut();
    expect(wrapper.find("button").text()).toBe("Clone");
  });
});
