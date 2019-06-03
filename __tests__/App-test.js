/**
 * @format
 */

import 'react-native';
import React, {Component} from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
