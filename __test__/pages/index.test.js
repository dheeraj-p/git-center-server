import { shallow } from 'enzyme';
import Index from '../../pages/index';

describe('Index', () => {
  it('should render properly', () => {
    const repositories = [
      {
        access_type: 'public',
        _id: '5e8b2ce54b018d3f2dd78df3',
        name: 'first',
        __v: 0,
      },
      {
        access_type: 'public',
        _id: '5e8b2ce54b018d3f2dd78df3',
        name: 'second',
        __v: 0,
      },
    ];
    const wrapper = shallow(<Index repositories={repositories} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
