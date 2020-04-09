import { shallow } from 'enzyme';
import FinderIcon from '../FinderIcon';

describe('FinderIcon', () => {
  it('should render properly for type blob', () => {
    const wrapper = shallow(<FinderIcon type='blob' />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly for type tree', () => {
    const wrapper = shallow(<FinderIcon type='blob' />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
