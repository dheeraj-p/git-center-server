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

  it('should show ssh key success message when API responds without error', async () => {
    simulateOnChangeOnInputField('test-key');
    APIClient.addSSHKey.mockResolvedValue({ error: false });
    await wrapper.find('button').props().onClick();

    expect(wrapper.find('#message').text()).toBe(
      'Your SSH key has been added!'
    );
  });

  it('should show error message when API responds with error', async () => {
    simulateOnChangeOnInputField('test-key');
    APIClient.addSSHKey.mockResolvedValue({ error: true });
    await wrapper.find('button').props().onClick();

    expect(wrapper.find('#message').text()).toBe(
      'Could not add SSH key!'
    );
  });
});
