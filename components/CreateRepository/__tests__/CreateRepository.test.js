import { shallow } from 'enzyme';
import CreateRepository from '../CreateRepository';
import * as APIClient from '../../../api_client';
import * as NextRouter from 'next/router';

jest.mock('../../../api_client');
jest.mock('next/router');

describe('CreateRepository', () => {
  let wrapper;

  const simulateOnChangeOnInputField = (newText) => {
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: newText,
      },
    });
  };

  beforeEach(() => {
    wrapper = shallow(<CreateRepository />);
  });

  it('should render properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should set the repository name on change the repository name text field', () => {
    simulateOnChangeOnInputField('test-repo');
    expect(wrapper.find('input[type="text"]').prop('value')).toEqual(
      'test-repo'
    );
  });

  describe('On clicking "Create" button', () => {
    let routerPush;

    beforeEach(async () => {
      routerPush = jest.fn();
      NextRouter.useRouter.mockReturnValue({ push: routerPush });
      simulateOnChangeOnInputField('test-repo');
      await wrapper.find('button').simulate('click');
    });

    it('should make an API call /api/repositories on click create', async () => {
      expect(APIClient.createRepository).toHaveBeenCalledWith('test-repo');
    });

    it('should change the browser route to "/"', async () => {
      expect(routerPush).toHaveBeenCalledWith('/');
    });
  });
});
