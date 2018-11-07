import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import Button from '@atlaskit/button';
import AKProps from '../AKProps';

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
};

// Define type of property
interface Props extends AKProps {
  text: string;
  isLoading: boolean;
  isDisabled: boolean;
  appearance: string;
  shouldFitContainer: boolean;
}

export class AKButton extends React.Component<Props> {
  // The default properties of the component.
  static defaultProps = {
    text: 'Button Text',
    isLoading: false,
    isDisabled: false,
    appearance: 'primary',
    shouldFitContainer: false,

    width: 120,
    height: 38
  }
  
  // The property controls for the component.
  static propertyControls: PropertyControls = {
    text: { 
      type: ControlType.String, 
      title: 'Text' 
    },
    isLoading: {
      type: ControlType.Boolean,
      title: 'Loading'
    },
    isDisabled: {
      type: ControlType.Boolean,
      title: 'Disabled'
    },
    appearance: {
      type: ControlType.Enum,
      title: 'Appearance',
      optionTitles: ['😀 Default', '🔵 Primary', '⚠️ Warning', '🚨 Danger', '❓ Help',  '👻 Subtle', '🔗 Link', '👻 Subtle Link 🔗'],
      options: ['default', 'primary', 'warning', 'danger', 'help', 'subtle', 'link', 'subtle-link']
    },
    shouldFitContainer: {
      type: ControlType.Boolean,
      title: 'Fit Container'
    }
  }
  
  render() {
    return (
      <div style={style}>
        <Button {...this.props}>
          {this.props.text}
        </Button>
      </div>
      );
  }
}
