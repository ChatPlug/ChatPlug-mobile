import React from 'react';
import ChatScreen from '../components/ChatScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ChatScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});