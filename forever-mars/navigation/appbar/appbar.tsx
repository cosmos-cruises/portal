import React from 'react';
import { Header, HeaderProps } from '@showoff/design.navigation.header';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';
import { SettingsConsumer } from '@cosmo-cruises/forever-mars.contexts.settings-context';

export type AppbarProps = {} & HeaderProps;

export function Appbar({ logo, navLinks, ...rest }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          {...rest}
          logo={logo}
          navLinks={[{ label: 'Booking', url: '/booking' }]}
          themeToggle={
            <ThemeToggle
              isDark={theme === 'dark'}
              onClick={() => toggleTheme()}
              size="small"
            />
          }
        />
      )}
    </SettingsConsumer>
  );
}
