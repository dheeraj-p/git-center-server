import { shallow } from 'enzyme';
import Repositories from '../Repositories';
import Toast from '../../Toast/Toast';
import RepositoryListItem from '../../RepositoryListItem/RepositoryListItem';

describe('Repositories', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Repositories repositories={[{ name: 'test' }]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('Toast should be hidden by default', () => {
    const wrapper = shallow(<Repositories repositories={[{ name: 'test' }]} />);
    const toastWrapper = wrapper.find(Toast);

    expect(toastWrapper.prop('isVisible')).toBe(false);
  });

  it('should show Toast when clicked on the copy button', () => {
    const wrapper = shallow(<Repositories repositories={[{ name: 'test' }]} />);
    wrapper.find(RepositoryListItem).first().props().onCopy();
    expect(wrapper.find(Toast).prop('isVisible')).toBe(true);
  });

  it('should hide Toast on close of Toast', () => {
    const wrapper = shallow(<Repositories repositories={[{ name: 'test' }]} />);
    wrapper.find(RepositoryListItem).first().props().onCopy();
    wrapper.find(Toast).props().onClose();
    
    expect(wrapper.find(Toast).prop('isVisible')).toBe(false);
  });
});
