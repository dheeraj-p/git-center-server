import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Home repositories={[]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
