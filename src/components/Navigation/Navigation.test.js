import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navigation } from './Navigation';

// configuration Enzyme
Enzyme.configure({ adapter: new Adapter() });

describe('component App should render without crashing', () => {
  it('render without crashing', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });
});
