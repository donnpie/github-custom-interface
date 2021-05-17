import React from 'react';
import Link from '../components/Link.jsx';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
    .create(<Link title="Link to user profile" href="http://www.facebook.com">Facebook</Link>)
    .toJSON();
    expect(tree).toMatchSnapshot();
    });