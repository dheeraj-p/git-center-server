import { shallow } from 'enzyme';
import PageLayout from '../PageLayout';

const DummyComponent = () => {
  return <div>Dummy</div>;
};

describe('PageLayout', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <PageLayout title="title">
        <DummyComponent />Î
      </PageLayout>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
