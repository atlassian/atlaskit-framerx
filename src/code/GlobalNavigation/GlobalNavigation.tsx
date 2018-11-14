import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import { LayoutManager, NavigationProvider } from '@atlaskit/navigation-next';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import AKProps from '../AKProps';

import GlobalNavigation from '@atlaskit/global-navigation';

const Global = () => (
  <GlobalNavigation
    productIcon={EmojiAtlassianIcon}
    productHref="#"
    appSwitcherComponent={({ className }) => (
      <button className={className}>
        <AppSwitcherIcon  label='App Switcher' />
      </button>
    )}
    appSwitcherTooltip="Switch to ..."
    loginHref="#login"
  />
);

export class AKGlobalNavigation extends React.Component<Props>{

  render() {
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={Global}
          productNavigation={() => null}
          containerNavigation={() => null}
        >
          {''}
        </LayoutManager>
      </NavigationProvider>
    )
  }
}