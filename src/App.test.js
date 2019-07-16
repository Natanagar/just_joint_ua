import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// configuration Enzyme

Enzyme.configure({ adapter: new Adapter() });

describe('component App should render without crashing', () => {
  it('render without crashing', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
