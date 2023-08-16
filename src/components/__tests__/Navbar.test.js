import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../Navbar';

test('NavBar matches snapshot', () => {
  const search = '';
  const onSearch = jest.fn();

  const { asFragment } = render(<NavBar search={search} onSearch={onSearch} />);

  expect(asFragment()).toMatchSnapshot();
});
