import React from 'react';
import {create} from 'react-test-renderer';

import {Header} from '../src/components';

describe('Testing Header component', () => {
  it('renders correctly', () => {
    const tree = create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test title props', () => {
    const component = create(<Header title="Home" />).root;
    expect(component.props.title).toBe('Home');
  });
});
