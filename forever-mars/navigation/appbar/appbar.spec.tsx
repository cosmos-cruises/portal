import React from 'react';
import { render } from '@testing-library/react';
import { SampleAppbar } from './appbar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<SampleAppbar />);
  const rendered = getByText('Booking');
  expect(rendered).toBeTruthy();
});
