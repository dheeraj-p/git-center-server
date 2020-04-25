import { shallow } from 'enzyme';
import Toast from '../../Toast/Toast';

describe('Toast', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Toast isVisible={true} message={'Sample toast'} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should have classname `visible` when Toast is visible', () => {
    const wrapper = shallow(
      <Toast isVisible={true} message={'Sample toast'} />
    );

    expect(wrapper.find('.toast-container').hasClass('visible')).toBeTruthy();
  });

  it('should have classname `hidden` when Toast is hidden', () => {
    const wrapper = shallow(
      <Toast isVisible={false} message={'Sample toast'} />
    );

    expect(wrapper.find('.toast-container').hasClass('hidden')).toBeTruthy();
  });

  it('should be hidden after 3000ms', () => {
    jest.clearAllMocks();
    const onClose = jest.fn();
    shallow(
      <Toast isVisible={true} message={'Sample toast'} onClose={onClose} />
    );

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(onClose, 3000);
  });
});
