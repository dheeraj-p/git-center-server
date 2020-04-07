import { shallow } from 'enzyme';
import Repositories from '../Repositories';

describe('Repositories', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Repositories repositories={[{ name: 'test' }]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
