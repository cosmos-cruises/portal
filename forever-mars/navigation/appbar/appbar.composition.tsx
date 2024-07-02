import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { Logo } from '@showoff/design.brand.logo';
import { Appbar } from './appbar';

export const SampleAppbar = () => (
  <MemoryRouter>
    <Appbar
      logo={
        <Link to="/">
          <Logo />
        </Link>
      }
      navLinks={[{ label: 'Booking', url: '/booking' }]}
    />
  </MemoryRouter>
);
