import { shallow } from 'enzyme';
import RepositoryListItem from '../RepositoryListItem';

describe('RepositoryListItem', () => {
  it('should render properly', () => {
    const wrapper = shallow(<RepositoryListItem />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
