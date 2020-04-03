import { shallow } from 'enzyme';
import AddSSHKey from '../AddSSHKey';

describe('AddSSHKey', () => {
  it('should render properly', () => {
    const wrapper = shallow(<AddSSHKey />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
