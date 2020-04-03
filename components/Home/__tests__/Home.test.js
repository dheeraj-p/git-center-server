import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
