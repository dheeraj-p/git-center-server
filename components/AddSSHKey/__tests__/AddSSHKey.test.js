import { shallow } from 'enzyme';
import AddSSHKey from '../AddSSHKey';
import * as APIClient from '../../../api_client';

jest.mock('../../../api_client');

describe('AddSSHKey', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddSSHKey />);
  });

  const simulateOnChangeOnInputField = newText => {
    wrapper.find('textarea').simulate('change', {
      target: {
        value: newText
      }
    });
  };

  it('should render properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should set the ssh key on change the ssh key text-area', () => {
    simulateOnChangeOnInputField('test-key');
    expect(wrapper.find('textarea').prop('value')).toEqual('test-key');
  });

  it('should make an API call /api/ssh on click create', async () => {
    simulateOnChangeOnInputField('test-key');
    wrapper.find('button').simulate('click');
    expect(APIClient.addSSHKey).toHaveBeenCalledWith('test-key');
  });

  it('should show ssh key success message', async () => {
    simulateOnChangeOnInputField('test-key');
    wrapper.find('button').simulate('click');

    await wrapper.update();

    expect(wrapper.find('#message').text()).toBe(
      'Your SSH key has been added!'
    );
  });
});
