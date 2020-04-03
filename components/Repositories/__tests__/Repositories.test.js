import { shallow } from 'enzyme';
import Repositories from '../Repositories';

describe('Repositories', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Repositories />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
