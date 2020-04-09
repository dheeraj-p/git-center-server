import { shallow } from 'enzyme';
import BlobView from '../BlobView';

describe('BlobView', () => {
  it('should render properly', () => {
    const content = {
      data: 'test content data',
    };
    const wrapper = shallow(<BlobView path='/test/path' content={content} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
