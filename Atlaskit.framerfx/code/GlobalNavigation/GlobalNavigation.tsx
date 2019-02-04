import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { LayoutManager, NavigationProvider } from '@atlaskit/navigation-next';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import Avatar from '@atlaskit/avatar';
import AddIcon from '@atlaskit/icon/glyph/add';
import SearchIcon from '@atlaskit/icon/glyph/search';
import { JiraIcon } from '@atlaskit/logo';
import AKProps from '../AKProps';
import { JiraWordmark } from '@atlaskit/logo';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import IssuesIcon from '@atlaskit/icon/glyph/issues';
import AddonIcon from '@atlaskit/icon/glyph/addon';
import EditorSettingsIcon from '@atlaskit/icon/glyph/editor/settings';
import StarLargeIcon from '@atlaskit/icon/glyph/star-large';
import NotificationIcon from '@atlaskit/icon/glyph/notification';
import {
  GlobalNav,
  HeaderSection,
  MenuSection,
  Item,
  Wordmark
} from '@atlaskit/navigation-next';

export const GlobalLink = ({ className, to, onClick, children }: any) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

const globalNavSecondaryItems = [
  { id: 'notification', icon: NotificationIcon, label: 'notification', size: 'small' },
  { id: 'app', icon: AppSwitcherIcon, label: 'App', size: 'small' },
  { id: 'help', icon: QuestionCircleIcon, label: 'Help', size: 'small' },
  {
    icon: () => (
      <Avatar
        borderColor="transparent"
        isActive={false}
        isHover={false}
        size="small"
      />
    ),
    label: 'Profile',
    size: 'small',
    id: 'profile',
  },
];

const globalNavPrimaryItems = ({ onSearchClick }: *) => [
  {
    id: 'jira',
    icon: ({ label }: { label: string }) => (
      <JiraIcon size="medium" label={label} />
    ),
    label: 'Jira',
    to: '/',
    component: GlobalLink,
  },
  { id: 'star', icon: StarLargeIcon, },
  { id: 'search', icon: SearchIcon, },
  { id: 'create', icon: AddIcon },
];

const Global = () => (
  <GlobalNav
    primaryItems={globalNavPrimaryItems({
      onSearchClick: this.toggleSearch,
    })}
    secondaryItems={globalNavSecondaryItems}
  />
);

const MyProductNavigation = () => (
  <React.Fragment>
    <HeaderSection>
      {({ className }) => (
        <div className={className}>
          <Wordmark wordmark={JiraWordmark} />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }) => (
        <div className={className}>
          <Item before={() => <DashboardIcon label="dashboard"/>} text="Dashboard" />
          <Item before={() => <FolderIcon label="Project"/>} text="Projects" />
          <Item before={() => <IssuesIcon label="Issues"/>} text="Issues and filters" />
          <Item before={() => <AddonIcon label="add on"/>} text="Add-ons" />
          <Item before={() => <EditorSettingsIcon label="settings"/>} text="Settings" />
        </div>
      )}
    </MenuSection>
  </React.Fragment>
);

export class AKGlobalNavigation extends React.Component<AKProps>{

  render() {
    return (
      <NavigationProvider>
        <LayoutManager
          globalNavigation={Global}
          productNavigation={MyProductNavigation}
          containerNavigation={null}
        >
        {''}
        </LayoutManager>
      </NavigationProvider>
    )
  }
}