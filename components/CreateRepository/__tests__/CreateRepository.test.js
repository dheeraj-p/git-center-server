import { shallow } from 'enzyme';
import CreateRepository from '../CreateRepository';

describe('CreateRepository', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CreateRepository />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
