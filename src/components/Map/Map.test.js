import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MapLeaflet } from './Map';

// configuration Enzyme

Enzyme.configure({ adapter: new Adapter() });

describe('component Map should render without crashing', () => {
  it('render without crashing', () => {
    const component = shallow(<MapLeaflet />);
    expect(component).toMatchSnapshot();
  });
});
